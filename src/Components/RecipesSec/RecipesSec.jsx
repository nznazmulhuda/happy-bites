import { useState } from "react";
import RecipeOrder from "../RecipeOrder/RecipeOrder";
import Recipes from "../Recipes/Recipes";
import { toast } from "react-toastify";

function RecipesSec() {
	const [order, setOrder] = useState([]);

	const handelWantToCook = (data) => {
		if (!order.includes(data)) {
			setOrder([...order, data]);
			toast.success('Item added done')
		} else {
			toast.warn('Item already exist')
			return;
		}
	};

	return (
		<>
			<div className="grid grid-cols-12 gap-6 mt-12">
				<Recipes handelWantToCook={handelWantToCook} />
				<RecipeOrder order={order} />
			</div>
		</>
	);
}

export default RecipesSec;
