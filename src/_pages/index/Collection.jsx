import React from 'react';
import { Loader } from '../../_components/common/Loader';
import sliderimg from '../../_assets/images/slider-img.png';
import rightArrow from '../../_assets/images/rightArrow.png';
import serv1 from '../../_assets/images/serv-1.png';
import serv2 from '../../_assets/images/serv-2.png';
import { newsArticles } from '../../_helpers/data';

const Collection = () => {

  const [loader, setLoader] = React.useState(false);
  const [newsdata, setNewsdata] = React.useState(newsArticles);

  return (
    <>
      <section class="section inner-banner">
        <div class="container">
          <ul class="nav collecttabs" role="tablist">
            <li class="nav-item" role="presentation">
              <a class="nav-link active sketch" data-bs-toggle="tab" data-bs-target="#website-tab"
                type="button" role="tab">
                <img src={serv2} class="img-fluid service-box" />
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link website" data-bs-toggle="tab" data-bs-target="#sketch-tab" type="button"
                role="tab"> <img src={serv1} class="img-fluid service-box" /> </a>
            </li>
          </ul>

        </div>
      </section>
      <section class="collection-list">
        <div class="section container">
          <div class="tab-content">
            <div class="tab-pane fade show active" id="website-tab" role="tabpanel"
              aria-labelledby="website-tab">
              <h2 class="text-center"><span class="second-heading b-black">My Gallery</span></h2>
              <div class="itemscontainer sketlist mb-5">
                {newsdata.length > 0 ? 
                  newsdata.slice(0, 4).map((item, index) => (<>
                    <div class="sketchitem item">
                      <a href="#"><img src={item.img} alt="Collection" /></a>
                      <div class="content">
                        <div class="dateTime"><i class="fa-solid fa-clock"></i><span>{item.date}</span>
                        </div>
                      </div>
                      <a href={item.link} class="llink" target='_blank'><i class="fa-solid fa-link"></i></a>
                    </div>
                  </>)) : <h1>Something went wrong!</h1>
                }
              </div>
              <div class="text-center">
                <a href="#" class="btn btn-primary">See More <img src={rightArrow} width="35"
                  alt="arrow-icon" /></a>
              </div>
            </div>
            <div class="tab-pane fade" id="sketch-tab" role="tabpanel" aria-labelledby="sketch-tab">
              <h2 class="text-center"><span class="second-heading b-black">My Collections</span></h2>
              <div class="itemscontainer sketlist mb-5">
                <div class="sketchitem item">
                  <a href="#"><img src={sliderimg} alt="Collection" /></a>
                  <div class="content">
                    <div class="dateTime"><i class="fa-solid fa-clock"></i><span>15 August, 2022</span>
                    </div>
                  </div>
                  <div class="llink"><i class="fa-solid fa-link"></i></div>
                </div>
                <div class="sketchitem item">
                  <a href="#"><img src={sliderimg} alt="Collection" /></a>
                  <div class="content">
                    <div class="dateTime"><i class="fa-solid fa-clock"></i><span>15 August, 2022</span>
                    </div>
                  </div>
                  <div class="llink"><i class="fa-solid fa-link"></i></div>
                </div>
                <div class="sketchitem item">
                  <a href="#"><img src={sliderimg} alt="Collection" /></a>
                  <div class="content">
                    <div class="dateTime"><i class="fa-solid fa-clock"></i><span>15 August, 2022</span>
                    </div>
                  </div>
                  <div class="llink"><i class="fa-solid fa-link"></i></div>
                </div>
                <div class="sketchitem item">
                  <a href="#"><img src={sliderimg} alt="Collection" /></a>
                  <div class="content">
                    <div class="dateTime"><i class="fa-solid fa-clock"></i><span>15 August, 2022</span>
                    </div>
                  </div>
                  <div class="llink"><i class="fa-solid fa-link"></i></div>
                </div>
              </div>
              <div class="text-center">
                <a href="#" class="btn btn-primary">See More <img src={rightArrow} width="35"
                  alt="arrow-icon" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Collection;