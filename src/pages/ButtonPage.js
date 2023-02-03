import { BsMouse2 } from "react-icons/bs";
import Button from "../components/Button";

const ButtonPage = () => {
	return (
		<div>
			<div className="flex">
				<Button primary ><BsMouse2 />BUTTON</Button>
				<Button secondary ><BsMouse2 />BUTTON</Button>
				<Button success ><BsMouse2 />BUTTON</Button>
				<Button warning ><BsMouse2 />BUTTON</Button>
				<Button danger ><BsMouse2 />BUTTON</Button>
			</div>
			<div className="flex">
				<Button primary rounded ><BsMouse2 />BUTTON</Button>
				<Button secondary rounded ><BsMouse2 />BUTTON</Button>
				<Button success rounded ><BsMouse2 />BUTTON</Button>
				<Button warning rounded ><BsMouse2 />BUTTON</Button>
				<Button danger rounded ><BsMouse2 />BUTTON</Button>
			</div>
			<div className="flex">
				<Button primary outline ><BsMouse2 />BUTTON</Button>
				<Button secondary outline ><BsMouse2 />BUTTON</Button>
				<Button success outline ><BsMouse2 />BUTTON</Button>
				<Button warning outline ><BsMouse2 />BUTTON</Button>
				<Button danger outline ><BsMouse2 />BUTTON</Button>
			</div>
			<div className="flex">
				<Button primary rounded outline ><BsMouse2 />BUTTON</Button>
				<Button secondary rounded outline ><BsMouse2 />BUTTON</Button>
				<Button success rounded outline ><BsMouse2 />BUTTON</Button>
				<Button warning rounded outline ><BsMouse2 />BUTTON</Button>
				<Button danger rounded outline ><BsMouse2 />BUTTON</Button>
			</div>
		</div>
	);
};

export default ButtonPage;
