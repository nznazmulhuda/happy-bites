import { useState } from "react";
import RecipeOrder from "../RecipeOrder/RecipeOrder";
import Recipes from "../Recipes/Recipes";
import { toast } from "react-toastify";

function RecipesSec() {
	const [order, setOrder] = useState([]);
	const [orderCheck, setOrderCheck] = useState([]);
	const [cooking, setCooking] = useState([]);
	const [totalTime, setTotalTime] = useState(0);
	const [totalCal, setTotalCal] = useState(0);

	const handelCurrentCook = (data) => {
		setOrderCheck(orderCheck.filter((o) => o.recipe_id !== data.recipe_id));
		setOrder(order.filter((or) => or !== data));
		setTotalTime(totalTime + Number(data.preparing_time));
		setTotalCal(totalCal + data.quantitys * Number(data.calories));
		setCooking([...cooking, data]);
		toast.success("Item added for cooking");
	};

	const handelWantToCook = (data, check) => {
		if (!orderCheck.includes(check)) {
			setOrderCheck([...orderCheck, check]);
			setOrder([...order, data]);
			toast.info("Item is added.");
		} else {
			toast.warn("Item already exist");
			return;
		}
	};

	return (
		<>
			<div className="grid container mx-auto grid-cols-12 gap-6 mt-5 lg:mt-14">
				<Recipes handelWantToCook={handelWantToCook} />
				<RecipeOrder
					order={order}
					handelCurrentCook={handelCurrentCook}
					totalTime={totalTime}
					cooking={cooking}
					totalCal={totalCal}
				/>
			</div>
		</>
	);
}

export default RecipesSec;
