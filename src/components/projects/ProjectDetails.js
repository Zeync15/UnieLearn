import React from 'react'
import Logo from '../../HipsterSchnauzer.jpg'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <h1>Capstone Project 1 - {id}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quibusdam explicabo debitis, blanditiis
            fugiat quos sint aut necessitatibus praesentium nemo. Ipsam debitis placeat delectus, ipsum ipsa corporis,
            minima, sed illo sequi porro facilis. Cupiditate adipisci sit vel et dignissimos fugiat sequi eligendi rerum,
            atque iste aliquid hic repudiandae consequatur blanditiis facere aperiam corrupti esse! Fugit facilis animi
            dolore, nam sunt doloremque eius enim delectus repellat. Consequatur beatae temporibus minus quae, pariatur
            itaque. Doloribus dolorum quis architecto quod similique corporis maxime doloremque amet animi deleniti, atque
            pariatur neque non enim totam consectetur quaerat omnis accusantium sapiente nostrum tempore quam, illum illo
            sint? Nobis laboriosam tenetur, tempora cum nostrum doloremque enim iste suscipit a earum odio non, impedit
            aliquid quia expedita blanditiis quae inventore assumenda, ex aspernatur dolorum? Ut, repellendus voluptas
            delectus nisi maxime reprehenderit accusamus odio corporis dolor doloribus qui. Perferendis ipsum ex repellat
            eveniet rem, dolores fuga! Repudiandae laboriosam quis officiis consequatur dolore natus? Quibusdam sunt dolor
            iure exercitationem facilis corporis aliquid cum, libero consequatur placeat esse obcaecati facere nam a.
            Doloribus obcaecati repellat, illo facere, ex, labore eius delectus reiciendis distinctio vero recusandae
            ducimus. Obcaecati pariatur quis harum architecto illum. Perspiciatis corporis a, dolores excepturi veniam
            necessitatibus. Ratione, at?
          </p>
          <br />
          <hr />
          <p>Posted by Prof. Choncc</p>
          <p>27/09/2020, 3pm</p>
        </div>
        <div className="col-6">
          <img src={Logo} alt="website logo" />
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
