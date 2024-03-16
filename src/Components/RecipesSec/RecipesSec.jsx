import { useState } from "react";
import RecipeOrder from "../RecipeOrder/RecipeOrder";
import Recipes from "../Recipes/Recipes";
import { toast } from "react-toastify";

function RecipesSec() {
	const [order, setOrder] = useState([]);
	const [cooking, setCooking] = useState([]);
	const [totalTime, setTotalTime] = useState(0);
	const [totalCal, setTotalCal] = useState(0);

	const handelCurrentCook = (data) => {
		setOrder(order.filter((or) => or !== data));
		setTotalTime(totalTime + Number(data.preparing_time));
		setTotalCal(totalCal + Number(data.calories));
		setCooking([...cooking, data]);
		toast.success("Item added for cooking");
	};

	const handelWantToCook = (data) => {
		if (!order.includes(data)) {
			setOrder([...order, data]);
			toast.success("Item added done");
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
