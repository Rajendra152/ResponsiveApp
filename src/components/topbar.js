import React, { Component } from "react";

export default class Topbar extends Component {
	render() {
		return (
			<div>
				<div class="container">
					<div class="row">
						<div id="carouselExampleIndicators" class="carousel slide mt-2" data-bs-ride="carousel">
							<div class="carousel-indicators">
								<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
								<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
								<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
							</div>
							<div class="carousel-inner">
								<div class="carousel-item active">
									<img src="macbook.jpeg" class="d-block w-100" alt="..." />
									<div class="carousel-caption d-none d-md-block heading-color">
										<h1>Innovative</h1>
										<p>Most Innovative Minds Together</p>
									</div>
								</div>
								<div class="carousel-item">
									<img src="macbook2.jpeg" class="d-block w-100" alt="..." />
									<div class="carousel-caption d-none d-md-block heading-color">
										<h1>Responsive</h1>
										<p>Most Creative Responsive Web Applications We Build for Clients</p>
									</div>
								</div>
								<div class="carousel-item">
									<img src="macbook3.jpeg" class="d-block w-100" alt="..." />
									<div class="carousel-caption d-none d-md-block heading-color">
										<h1>Flexible</h1>
										<p>We Have The Best And Most Flexible Team With us.</p>
									</div>
								</div>
							</div>
							<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
								<span class="carousel-control-prev-icon" aria-hidden="true"></span>
								<span class="visually-hidden">Previous</span>
							</button>
							<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
								<span class="carousel-control-next-icon" aria-hidden="true"></span>
								<span class="visually-hidden">Next</span>
							</button>
						</div>
						<div class="card m-2">
							<div class="row g-0">
								<div class="col-md-4">
									<img src="baby.jfif" class="img-fluid rounded-start " alt="" />
								</div>
								<div class="col-md-8">
									<div class="card-body">
										<h5 class="card-title">Alice</h5>
										<p class="card-text">Frontend Developer At Innominds Software Private Limited with 2 Years of experience.</p>
										<p class="card-text"><small class="text-muted">Employee Status: Active</small></p>
									</div>
								</div>
							</div>
						</div>
						<div class="card m-2">
							<div class="row g-0">
								<div class="col-md-4">
									<img src="baby2.jfif" class="img-fluid rounded-start " alt="" />
								</div>
								<div class="col-md-8">
									<div class="card-body">
										<h5 class="card-title">Hennah</h5>
										<p class="card-text"> Automation Engineer At Innominds Software Private Limited with 3 Years of experience.</p>
										<p class="card-text"><small class="text-muted">Employee Status: Active</small></p>
									</div>
								</div>
							</div>
						</div>
						<div class="card m-2">
							<div class="row g-0">
								<div class="col-md-4">
									<img src="baby3.jfif" class="img-fluid rounded-start " alt="" />
								</div>
								<div class="col-md-8">
									<div class="card-body">
										<h5 class="card-title">Hermoine</h5>
										<p class="card-text">Cloud and DevOps Engineer At Innominds Software Private Limited with 5 Years of experience.</p>
										<p class="card-text"><small class="text-muted">Employee Status: Active</small></p>
									</div>
								</div>
							</div>
						</div>
						<div className="top-section p-2 col-sm-12 col-md-6 col-lg-4">
							<img src="baby.jfif" class="image accordion-button" alt="baby" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-controls="collapseOne" />
							<div class="accordion" id="accordionExample">
								<div class="accordion-item">
									<div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
										<div class="accordion-body">
											<strong>Alice<br /></strong> Frontend Developer At Innominds Software Private Limited with 2 Years of experience.<br />
											Employee Status: Active
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="top-section p-2 col-sm-12 col-md-6 col-lg-4">
							<img src="baby2.jfif" class="image accordion-button" alt="baby" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-controls="collapseTwo" />
							<div class="accordion" id="accordionExample">
								<div class="accordion-item">
									<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
										<div class="accordion-body">
											<strong>Hennah</strong><br />Automation Engineer At Innominds Software Private Limited with 3 Years of experience.<br />
											Employee Status: Active
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="top-section p-2 col-sm-12 col-md-6 col-lg-4">
							<img src="baby3.jfif" class="image accordion-button" alt="baby" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-controls="collapseThree" />
							<div class="accordion" id="accordionExample">
								<div class="accordion-item">
									<div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
										<div class="accordion-body">
											<strong>Hermoine</strong><br />Cloud and DevOps Engineer At Innominds Software Private Limited with 5 Years of experience.<br />
											Employee Status: Active
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
