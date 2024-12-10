const nextConfig = {
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
    additionalData: `$backgroundPrimary: #ffffff;
                    $backgroundSecondary: #fafafa;
                    $primary: #7c6a46;
                    $secondary: #fafafa;
                    $textPrimary: #1c1c1c;
                    $textSecondary: #454545;
                    $textLight: #ffffff;
                    $stroke: #aba18f;`,
  },
};

export default nextConfig;
