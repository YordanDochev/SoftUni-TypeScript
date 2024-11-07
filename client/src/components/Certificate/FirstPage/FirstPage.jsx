import FifthRow from "./FifthRow/FifthRow"
import FirstRow from "./FirstRow/FirstRow"
import FourthRow from "./FourthRow/FourthRow"
import Header from "./Header/Header"
import SecondRow from "./SecondRow/SecondRow"
import SixthRow from "./SixthRow/SixthRow"
import ThirdRow from "./ThirdRow/ThirdRow"

const FirstPage = () => {
    return (
        <>
            <Header />
            <FirstRow />
            <SecondRow />
            <ThirdRow />
            <FourthRow />
            <FifthRow />
            <SixthRow />
        </>
    )
};

export default FirstPage;