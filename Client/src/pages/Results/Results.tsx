import { useSearchParams  } from 'react-router-dom';
import { useFetchProducts } from '../../services/useFetchProduct';
import ProductList from '../../components/productList/ProductList';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Head from '../../components/Head/Head';
import Error from '../../components/Error/Error';

const Results: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search');

  const { products, breadcrumbs, error } = useFetchProducts(query);

  if (error) {
    return <Error errorMessage={error} />; 
  }

  return (
    <>
      <Head title={`Resultados de ${query || 'tu búsqueda'} | Mercado Libre`}></Head>
      { breadcrumbs.length > 0 &&<Breadcrumb categories={breadcrumbs} /> }
      { products.length > 0 && <ProductList products={products} /> }
    </>
  );
};

export default Results;
