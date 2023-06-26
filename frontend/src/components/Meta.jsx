import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Phocus Store',
  description: 'We sell the best photos for cheap',
  keywords: 'photography, photos, cheap photos, stock photos',
};

export default Meta;
