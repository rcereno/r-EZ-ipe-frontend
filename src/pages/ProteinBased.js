import React, { useEffect, useState } from 'react';

export const ProteinBased = () =>
 {
	useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/proteinrecipes');
        const items = await data.json();
        setItems(items);
    };

	return (
		<body style={{
            background: "linear-gradient(#FFFFFF, #D2B48C)",
            height: '1000px'

        }}>

		<section>
			<div className="proteinbased">
				<center><h1  class="mt-5">Protein Based Recipes</h1></center>


			{
				
				items.map(item => (
					<div class="accordion" id="accordionExample">
						<div class="card">
							<div class="card-header" id="headingOne">
								<h2 class="mb-0">
									<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
										<i> Recipe for {item.name} </i>
									</button>
								</h2>
							</div>

							<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
								<div class="card-body">
									<img src={item.imageURL} height="150" width="150" />
									<div> <b>Steps:</b> <li>{item.steps}</li> </div>


									<div> <b>Ingredients:</b> <li>{item.ingredients.name}</li> </div>
									



								</div>
							</div>
						</div>
					</div>

				))
			}
		</div>
	</section>
	</body>
);
	
};