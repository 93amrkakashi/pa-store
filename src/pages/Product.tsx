import Breadcrumb from '../components/Breadcrumbs'
import ProductDetails from '../components/product/ProductDetails'
import ProductSlider from '../components/sliders/ProductsSlider'
import MulitSectionProductsSlider from '../components/sliders/MultiSectionProductsSlider';
import { useParams } from 'react-router-dom';

// const products = [
//   {
//     id: 1,
//     name: "كيف تبيع الهواء",
//     category: "كتب",
//     price: 2,
//     oldPrice: 200,
//     discount: "-30%",
//     image: "/img/home/start-work-category.jpeg",
//     isNew: false,
//     rating: 4,
//   },
//   {
//     id: 2,
//     name: "كتاب البرمجة",
//     category: "كتب",
//     price: 10,
//     oldPrice: 50,
//     discount: "جديد",
//     image: "/img/home/start-work-category.jpeg",
//     isNew: true,
//     rating: 5,
//   },
//   {
//     id: 3,
//     name: "فن البيع الحديث",
//     category: "كتب",
//     price: 15,
//     oldPrice: 30,
//     discount: "-50%",
//     image: "/img/home/start-work-category.jpeg",
//     isNew: false,
//     rating: 3,
//   },
//   {
//     id: 4,
//     name: "أساسيات التسويق",
//     category: "كتب",
//     price: 25,
//     oldPrice: 40,
//     discount: "-20%",
//     image: "/img/home/start-work-category.jpeg",
//     isNew: false,
//     rating: 5,
//   },
//   {
//     id: 5,
//     name: "دليل المبتدئين للبرمجة",
//     category: "كتب",
//     price: 30,
//     oldPrice: 70,
//     discount: "جديد",
//     image: "/img/home/start-work-category.jpeg",
//     isNew: true,
//     rating: 4,
//   },
//   {
//     id: 6,
//     name: "كيف تبدأ مشروعك",
//     category: "كتب",
//     price: 5,
//     oldPrice: 15,
//     discount: "-60%",
//     image: "/img/home/start-work-category.jpeg",
//     isNew: false,
//     rating: 4,
//   },
//   {
//     id: 7,
//     name: "إدارة الوقت",
//     category: "كتب",
//     price: 12,
//     oldPrice: 25,
//     discount: "-20%",
//     image: "/img/home/start-work-category.jpeg",
//     isNew: false,
//     rating: 3,
//   },
//   {
//     id: 8,
//     name: "مهارات القيادة",
//     category: "كتب",
//     price: 18,
//     oldPrice: 35,
//     discount: "جديد",
//     image: "/img/home/start-work-category.jpeg",
//     isNew: true,
//     rating: 5,
//   },
//   {
//     id: 9,
//     name: "دليل الكتابة الإبداعية",
//     category: "كتب",
//     price: 20,
//     oldPrice: 45,
//     discount: "-25%",
//     image: "/img/home/start-work-category.jpeg",
//     isNew: false,
//     rating: 4,
//   },
//   {
//     id: 10,
//     name: "كيف تكون مؤثراً",
//     category: "كتب",
//     price: 8,
//     oldPrice: 20,
//     discount: "-60%",
//     image: "/img/home/start-work-category.jpeg",
//     isNew: false,
//     rating: 3,
//   },
// ];



const Product = () => {
  const { id } = useParams();
    console.log(id)
  

  return (
    <div>
      <Breadcrumb />
      <ProductDetails />
      <ProductSlider title='منتجات مماثلة' buttonTitle='اظهر جميع المنتجات'  />
      <MulitSectionProductsSlider />
    </div>
  )
}

export default Product

