import sql from "mssql";

const config = {
  user: "sa",
  password: "A$192dijd",
  server: "10.11.9.6",
  database: "cssd",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
  port: 1433,
};

export const connect = await sql.connect(config);

// export default config;
