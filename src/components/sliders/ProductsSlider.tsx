import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/slidersMain.css"; // ملف CSS الخاص بك
import { Link } from "react-router-dom";
import OutlineButton from "../helpers/buttons/OutlineButton";






// تعريف النوع لخصائص السهم
interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const CustomPrevArrow: React.FC<ArrowProps> = ({
  className,
  style,
  onClick,
}) => (
  <button
    className={`slick-arrow slick-prev !border !border-primary-text ${className}`}
    style={style}
    onClick={onClick}
  >
    <i className="fa fa-chevron-left"></i>
  </button>
);

const CustomNextArrow: React.FC<ArrowProps> = ({
  className,
  style,
  onClick,
}) => (
  <button
    className={`slick-arrow slick-next !border !border-primary-text ${className}`}
    style={style}
    onClick={onClick}
  >
    <i className="fa fa-chevron-right"></i>
  </button>
);

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice: number;
  discount: string;
  image: string;
  isNew: boolean;
  rating: number;
}

interface ProductSliderProps {
  title: string;
  buttonTitle: string;
  products: Product[]; // استلام المنتجات كـ prop
}

const ProductSlider: React.FC<ProductSliderProps> = ({
  title,
  buttonTitle,
  products,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="section overflow-hidden">
      <div className="container overflow-hidden mb-[20px]">
        <div className="row">
          <div className="col-md-12">
            <h3 className="title text-7xl text-center font-bold text-primary-text">
              {title}
            </h3>
          </div>
          <div className="col-md-12 py-[50px]">
            <Slider {...settings} className="products-slick">
              {products.map((product) => (
                <div
                  className="product !scale-[0.95] hover:!scale-1"
                  key={product.id}
                >
                  <Link to={`/products/${product.id}`}>
                    <div className="product-img">
                      <img src={product.image} alt={product.name} />
                      <div className="product-label">
                        <span className={product.isNew ? "new" : "sale"}>
                          {product.discount}
                        </span>
                      </div>
                    </div>
                    <div className="product-body">
                      <p className="product-category">{product.category}</p>
                      <h3 className="product-name">{product.name}</h3>
                      <h4 className="product-price">
                        ${product.price}{" "}
                        <del className="product-old-price">
                          ${product.oldPrice}
                        </del>
                      </h4>
                      <div className="product-rating">
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className={`fa ${
                              i < product.rating ? "fa-star" : "fa-star-o"
                            }`}
                          ></i>
                        ))}
                      </div>
                      <div className="product-btns">
                        <button className="add-to-wishlist">
                          <i className="fa fa-heart-o"></i>
                          <span className="tooltipp">إضافة إلى المفضلة</span>
                        </button>
                        <button className="add-to-compare">
                          <i className="fa fa-exchange"></i>
                          <span className="tooltipp">إضافة للمقارنة</span>
                        </button>
                        <button className="quick-view">
                          <i className="fa fa-eye"></i>
                          <span className="tooltipp">عرض سريع</span>
                        </button>
                      </div>
                    </div>
                  </Link>
                  <div className="add-to-cart">
                    <button className="add-to-cart-btn">
                      <i className="fa fa-shopping-cart"></i> إضافة إلى السلة
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <OutlineButton
        isLink={true}
        link="/products"
        LinkclassNames="flex justify-center"
        classNames=""
        text={buttonTitle}
      />
    </div>
  );
};

export default ProductSlider;

