import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
    additionalData: `$backgroundPrimary: #ffffff;
                    $backgroundSecondary: #fafafa;
                    $backgroundPrimaryLight: #f9f1e7;
                    $primary: #7c6a46;
                    $primaryHover: #bcb388;
                    $secondary: #fafafa;
                    $textPrimary: #1c1c1c;
                    $textSecondary: #454545;
                    $textLight: #ffffff;
                    $stroke: #aba18f;`,
  },
};

export default withNextIntl(nextConfig);
