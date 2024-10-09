import { useParams } from 'react-router-dom';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import ProductDetail from '../../components/productDetail/ProductDetail';
import { useFetchProductDetails } from '../../services/useFetchProductDetails';
import Head from '../../components/Head/Head';
import Error from '../../components/Error/Error';
import Loading from '../../components/loading/Loading';

const Description: React.FC = () => {
    const { id } = useParams();
    
    const { product, breadcrumbs, error } = useFetchProductDetails(id); 

    if (error) {
        return <Error errorMessage={error}/>;
    }

    return (
      <>
          <Head title="Detalles del producto | Mercado Libre" />
          {breadcrumbs.length > 0 && <Breadcrumb categories={breadcrumbs} />}
          {product ? (
              <ProductDetail product={product} /> 
          ) : (
              <Loading/>
          )}
      </>
  );
};

export default Description;
