export function Carousel({title, items, renderCard}){
    return(
        <div className="black text-light mb-5">
            <h1 className="my-4 text-light">{title}</h1>
			<div className="my-carousel">
				{
					items.map((item) => (
                        <div key={item.uid}>
                            {renderCard(item)}
                        </div>
					))
				}
			</div>
        </div>
    )
}