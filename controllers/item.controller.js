import { connect } from "../config/sqlConnect.js";

export const getAll = async (req, res) => {
  try {
    let items = await connect.request().query("SELECT TOP 100 * from item");

    res.json({
      error: false,
      message: `total recode is ${items.recordset.length}`,
      data: items.recordset,
    });
  } catch (error) {
    res.json({
      error: true,
      message: `${error}`,
      data: [],
    });
  }
};

export const getPrice = async (req, res) => {
  const { price } = req.body;

  if (price <= 0 || price === undefined) {
    res.json({
      error: true,
      message: `Price must more then 0`,
      data: 0,
    });

    return;
  }

  const result = await calculatePrice(price);

  res.json({
    error: false,
    message: `calculate successful`,
    data: +result ?? 0,
  });
};

const calculatePrice = async (price) => {
  const vat = await calculateVat(price);
  const result = +price + +vat;

  return result;
};

const calculateVat = async (price) => {
  const vat = 7 / 100;

  return price * vat;
};

export const getItemAndPrice = async (req, res) => {
  const { price } = req.body;

  if (price <= 0 || price === undefined) {
    res.json({
      error: true,
      message: `Price must more then 0`,
      data: 0,
    });

    return;
  }

  const resultPrice = await calculatePrice(price);
  const items = await getItem();

  res.json({
    error: false,
    message: `calculate successful`,
    data: {
      price: resultPrice,
      items: items,
    },
  });
};

const getItem = async () => {
  try {
    let items = await connect.request().query("SELECT TOP 200 * from item");

    return items.recordset;
  } catch (error) {
    return [];
  }
};
