const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      // INVESTOR ROUTES

      {
        source: "/dashboard",
        destination: "/investor/dashboard",
      },
      {
        source: "/signin",
        destination: "/investor/signin",
      },
      {
        source: "/signup",
        destination: "/investor/signup",
      },
      {
        source: "/home",
        destination: "/investor/home",
      },

      // INVESTIMENTS
      {
        source: "/investir",
        destination: "/investor/investiments",
      },
      {
        source: "/investimentos/:id",
        destination: "/investor/investiments/:id",
      },

      // EARNINGS/PROVENTOS
      {
        source: "/proventos",
        destination: "/investor/earnings",
      },
      {
        source: "/proventos/:id",
        destination: "/investor/earnings/:id",
      },

      // EXTRACT/EXTRATO
      {
        source: "/extrato",
        destination: "/investor/extract",
      },
      {
        source: "/extrato/:id",
        destination: "/investor/extract/:id",
      },

      // INVEST
      {
        source: "/investir/:id",
        destination: "/investor/invest/:id",
      },

      {
        source: "/completar-cadastro",
        destination: "/investor/complete/registration",
      },

      // PROFILE
      {
        source: "/perfil",
        destination: "/investor/profile",
      },

      // BUSINESS ROUTES
      {
        source: "/negocio/completar",
        destination: "/business/signup/complete-registration",
      },
    ];
  },
};

module.exports = nextConfig;
