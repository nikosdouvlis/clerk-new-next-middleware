import { withClerkMiddleware } from "@clerk/nextjs/server";

export default withClerkMiddleware(
  (request) => {
    console.log("hello frm clerk middleware");
  },
  {
    jwtKey:
      "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAq2rJOQ76LkXjruzO2yC2V9kNE1KvXO88htSZtCwxPS9y66E5XIGTS77tJz7DLauqP7oEcNgCm8yHEoxiix38uH8AHU26/ewM77WuhxU4CSsZm7dOqEo/tKwAIRoXd43LN7mN0Xvc4QsV3i9dVsNx1taM8/w+815js+SGXMaY1UnRfLcBPo8hxfWvP2gb+OrW9QBgi1sBaaxpYCVrElqqF16WCS8bULP4jRtCdYEWYxa8KS/hDdXqo18QseIPTkySZcDaIfj8t9w6Ok/9yr01Vq8JdcE28YzmnRJ9vlXd0akU4b15Z6coYgTmZ4V3HFiO4K17BJh5+RrE7NenSsAA9wIDAQAB",
  }
);
