import React,{useState} from 'react'
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Tabs = styled.div`
${'' /* .container {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 500px;
  height: 300px;
  background: #f1f1f1;
  margin: 100px auto 0;
  word-break: break-all;
  border: 1px solid rgba(0, 0, 0, 0.274);
} */}

`
export default function Tab() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <Tabs>
        <div className="section-title">
          <h2 className="special" style={{marginRight: "100%", width: "440px"}}>Check our <span>Specials</span></h2>
          {/* <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p> */}
        </div>
        <div>
        <Container>
      <Row>
        <Col className="tabss" md={4}>
        <ul class="nav  flex-column">
              <li class="nav-item">
                <button className={toggleState ===1 ? "tabs active-tabs" : "tabs"} data-bs-toggle="tab" 
                 onClick={()=> toggleTab(1)}
                >Modi sit est</button>
              </li>
              <li className="nav-item">
                <button className={toggleState ===2 ? "tabs active-tabs" : "tabs"}  data-bs-toggle="tab"  onClick={()=> toggleTab(2)} >Unde praesentium sed</button>
              </li>
              <li className="nav-item">
                <button className={toggleState ===3 ? "tabs active-tabs" : "tabs"} data-bs-toggle="tab"  onClick={()=> toggleTab(3)} >Pariatur explicabo vel</button>
              </li>
              <li className="nav-item">
                <button className={toggleState ===4 ? "tabs active-tabs" : "tabs"} data-bs-toggle="tab"  onClick={()=> toggleTab(4)} >Nostrum qui quasi</button>
              </li>
              <li className="nav-item">
                <button className={toggleState ===5 ? "tabs active-tabs" : "tabs"} data-bs-toggle="tab"  onClick={()=> toggleTab(5)} >Iusto ut expedita aut</button>
              </li>
            </ul>
        </Col>
        <Col xs={12} md={8}>
        <div class="tab-content">
              <div  className={toggleState === 1 ? "active show" : "content"}>
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    <h3>Architecto ut aperiam autem id</h3>
                    <p class="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                    <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img src={require("../img/specials-1.png")} alt="" class="img-fluid" />
                  </div>
                </div>
              </div>
              <div  className={toggleState === 2 ? "active show" : "content"}>
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    <h3>Et blanditiis nemo veritatis excepturi</h3>
                    <p class="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                    <p>Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal</p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img src={require("../img/specials-2.png")} alt="" class="img-fluid" />
                  </div>
                </div>
              </div>
              <div  className={toggleState === 3 ? "active show" : "content"}>
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    <h3>Impedit facilis occaecati odio neque aperiam sit</h3>
                    <p class="fst-italic">Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut</p>
                    <p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img src={require("../img/specials-3.png")} alt="" class="img-fluid" />
                  </div>
                </div>
              </div>
              <div className={toggleState === 4 ? "active show" : "content"}>
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    <h3>Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore</h3>
                    <p class="fst-italic">Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus</p>
                    <p>Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore</p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img src={require("../img/specials-4.png")} alt="" class="img-fluid" />
                  </div>
                </div>
              </div>
              <div className={toggleState === 5 ? "active show" : "content"}>
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    <h3>Est eveniet ipsam sindera pad rone matrelat sando reda</h3>
                    <p class="fst-italic">Omnis blanditiis saepe eos autem qui sunt debitis porro quia.</p>
                    <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img src={require("../img/specials-5.png")}alt="" class="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
        </Col>
        
      </Row>
      
    </Container> 
        </div>
    </Tabs>
  )
}
