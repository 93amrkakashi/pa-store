import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Modal from './ModalProps';

const ProductDetails: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
  };

  const images = [
    '/img/home/start-work-category.jpeg',
    '/img/home/books-category.jpg',
    '/img/home/courses-category.webp',
  ];

  const [isModalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    address: '',
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to API
    console.log('Form data:', formData);
    handleModalClose();
  };


  // شراء الكتاب
  const handleBuyNowClick = () => {
    setModalVisible(true);
  };

  // الاطلاع علي اول صفحتيم من الكتاب
  const handelPdf = () => {
    window.open(
      `https://drive.google.com/file/d/10T-iT0l-6Bbrsmt3_aXwz6F04fbBw9GF/view?usp=sharing`,
      "_blank"
    );
  };

  return (
    <div className="section">
      {/* container */}
      <div className="container">
        {/* row */}
        <div className="row  space-between">
          <div className=" col-md-6">
                <Slider {...settings}>
                  {images.map((src, index) => (
                    <div className="product-preview" key={index}>
                      <img src={src} className='object-cover ' alt={`Product ${index + 1}`} />
                    </div>
                  ))}
                </Slider>
              </div>

          {/* Product details */}
          <div className="col-md-6 h-full " dir='rtl'>
            <div className="product-details  flex  flex-col  !justify-center">
              <h2 className="product-name">كيف تبيع الهواء</h2>
              <div>
                <div className="product-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-o"></i>
                </div>
                <a className="review-link" href="#">10 تقييم(ات) | أضف تقييمك</a>
              </div>
              <div>
                <h3 className="product-price">2$ <del className="product-old-price">20$</del></h3>
                <span className="product-available">متوفر في المخزون</span>
              </div>
              <p className='justify-center w-full text-justify text-2xl md:text-3xl leading-8'>
                  ملخص الكتاب 
هل فكرت يوماً ما أنك تستطيعُ بيعَ شيءٍ غير ملموس مثل الهواء؟ 
"كيف تبيع الهواء" رحلةٌ غير اعتيادية في عالم البيع، يخبرك فيها أنك قادر على بيع أي شيء في الدنيا، حتى لو أردت بيع الهواء، ويتحدث الكاتب معك وكأنكما تجلسان في مقهى وتستمتعان بقهوة الصباح.
التجربة الحياتية: كُتب هذا الكتاب في ظلِّ ظروفِ الحربِ على غزّة، مما يجعله يعكسُ تجربةً حياتيّةً حقيقيّةً عن البقاءِ والصمودِ، فهو ليس مجرّد كتابٍ عن المبيعاتِ، وسيفتح أمامك أبواباً من الفرص ستُحدث تحولاً ملموساً في حياتك.
اللغة واللهجة: تمت كتابة الكتاب باللهجةِ البيضاء لتسهيل إيصال الأفكار للقرّاء من مختلفِ الفئاتِ، بهدفِ جعلهِ سهلَ الفهمِ ومناسبًا للجميع.
الرسالة الأخيرة: البيع ليس مجرد مهارة، بل هو ركيزةٌ أساسيّة في الحياة، ويأخذك الكتاب في رحلة متأنية في مرحلة اللاوعي لاكتشاف أسرار البيع تبدأ من مرحلة ما قبل البيع ولا تنتهي أبدًا، ويطرحُ لكَ أفكارًا لبيعِ أشياءَ لم تتخيّلْ يومًا أنَّكَ تستطيعُ بيعَها، ويخبرك بأن على كلِّ إنسانٍ تعلُّمُها، فكلّما كنتَ أفضلَ في البيعِ، كلّما كانتْ حياتُك أفضلَ.
أتمنى أن ألتقي بك مرة أخرى في كتابٍ جديد، حيث نواصلُ استكشافَ عالمِ الفرَص سويًا، لقد استمتعت في الحوار معك، وآمل أن تجد هذه الأفكار ملهمةً لك.
              </p>

              <div className="add-to-cart w-full mt-[20px]">
                <button className="add-to-cart-btn w-full">
                  <i className="fa fa-shopping-cart"></i> أضف إلى السلة
                </button>
                <button className="add-to-cart-btn w-full my-3" onClick={handleBuyNowClick}>
                <i className="fa fa-shopping-cart"></i> شراء الان
                </button>
                <button className="add-to-cart-btn w-full" onClick={handelPdf}>
                <i className="fa fa-shopping-cart"></i> تصفح اول صفحتين
                </button>
              </div>

              {/* <ul className="product-links">
                <li className='text-primary-text font-bold !text-[1.3rem]'>الفئة:</li>
                <li><a href="#">سماعات رأس</a></li>
                <li><a href="#">إكسسوارات</a></li>
              </ul> */}
            </div>
          </div>

          {/* /Product details */}

          {/* Product tab */}
          <div className="col-md-12">
            <div id="product-tab">
              {/* product tab nav */}
              <ul className="tab-nav" dir='rtl'>
                <li className="active"><a data-toggle="tab" href="#tab1">التفاصيل</a></li>
                <li><a data-toggle="tab" href="#tab3">المراجعات (3)</a></li>
              </ul>
              {/* /product tab nav */}

              {/* product tab content */}
              <div className="tab-content">
                {/* tab1 */}
                <div id="tab1" className="tab-pane fade in active">
                  <div className="row">
                    <div className="col-md-12">
                      <p>
                        التفاصيل وكلام كتير عن المنتج وما الي ذلك
                      </p>
                    </div>
                  </div>
                </div>
                {/* /tab1 */}

               

                {/* tab3 */}
                <div id="tab3" className="tab-pane fade in">
                  <div className="row">
                    {/* Rating */}
                    <div className="col-md-3">
                      <div id="rating">
                        <div className="rating-avg">
                          <span>4.5</span>
                          <div className="rating-stars">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                          </div>
                        </div>
                        <ul className="rating">
                          {[5, 4, 3, 2, 1].map((star, index) => (
                            <li key={index}>
                              <div className="rating-stars">
                                {Array.from({ length: star }, (_, i) => (
                                  <i className="fa fa-star" key={i}></i>
                                ))}
                                {Array.from({ length: 5 - star }, (_, i) => (
                                  <i className="fa fa-star-o" key={i}></i>
                                ))}
                              </div>
                              <div className="rating-progress">
                                <div style={{ width: `${star * 20}%` }}></div>
                              </div>
                              <span className="sum">{star}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {/* /Rating */}

                    {/* Reviews */}
                    <div className="col-md-6" dir='rtl'>
                      <div id="reviews">
                        <ul className="reviews">
                          {['John', 'Jane', 'Doe'].map((name, index) => (
                            <li key={index}>
                              <div className="review-heading">
                                <h5 className="name">{name}</h5>
                                <p className="date">27 DEC 2018, 8:0 PM</p>
                                <div className="review-rating">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star-o empty"></i>
                                </div>
                              </div>
                              <div className="review-body">
                                <p>
                                  منتج زي العسل , شكرا للشركة القائمة علي هذا المنتج , الوصيل كويس وشوية تطبيل
                                </p>
                              </div>
                            </li>
                          ))}
                        </ul>
                        <ul className="reviews-pagination">
                          <li className="active">1</li>
                          <li><a href="#">2</a></li>
                          <li><a href="#">3</a></li>
                          <li><a href="#">4</a></li>
                          <li><a href="#"><i className="fa fa-angle-right"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    {/* /Reviews */}

                    {/* Review Form */}
                    <div className="col-md-3">
                      <div id="review-form">
                        <form className="review-form">
                          <input className="input" type="text" placeholder="Your Name" />
                          <input className="input" type="email" placeholder="Your Email" />
                          <textarea className="input" placeholder="Your Review"></textarea>
                          <div className="input-rating">
                            <span>Your Rating: </span>
                            <div className="stars">
                              {[5, 4, 3, 2, 1].map((star) => (
                                <React.Fragment key={star}>
                                  <input id={`star${star}`} name="rating" value={star} type="radio" />
                                  <label htmlFor={`star${star}`}></label>
                                </React.Fragment>
                              ))}
                            </div>
                          </div>
                          <button className="primary-btn">Submit</button>
                        </form>
                      </div>
                    </div>
                    {/* /Review Form */}
                  </div>
                </div>
                {/* /tab3 */}
              </div>
              {/* /product tab content */}
            </div>
          </div>
          {/* /product tab */}
        </div>
        {/* /row */}
      </div>
      {/* /container */}
      {/* Modal Component */}
      <Modal isVisible={isModalVisible} onClose={handleModalClose}>
        <h2 
        dir='rtl'
        className="text-2xl font-bold mb-4">شراء المنتج</h2>
        <form
        dir='rtl'
        onSubmit={handleFormSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="الاسم"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="whatsapp"
            placeholder="رقم الواتساب"
            value={formData.whatsapp}
            onChange={handleInputChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="البريد الإلكتروني"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="address"
            placeholder="العنوان"
            value={formData.address}
            onChange={handleInputChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="bg-green-500 text-white w-full py-3 rounded-md hover:bg-green-600 focus:outline-none transition">
            تأكيد
          </button>
          <button className="bg-green-500 text-white w-full py-3 rounded-md hover:bg-green-600 focus:outline-none transition" onClick={handelPdf}>
          تصفح اول صفحتين    
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default ProductDetails;
