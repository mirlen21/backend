module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '936c1ad05794dbecdac2361f13edc327'),
  },
});
