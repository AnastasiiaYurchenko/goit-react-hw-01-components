import { BsAlarm } from 'react-icons/bs';
import { AiOutlinePieChart } from 'react-icons/ai';
import { HiOutlineChartBar } from 'react-icons/hi';

export const Recipe = ({ item: { name, image, time, servings, calories } }) => {
    return (
        <section>
            <img src={image} alt={name} width="240" />
            <h2>{name}</h2>

            <div>
                <div>
                    {/* <span>icon</span> */}
                    <BsAlarm/>
                    {time} min
                </div>
                 <div>
                    <AiOutlinePieChart/>
                    {servings} servings
                </div>
                <div>
                    <HiOutlineChartBar/>
                    {calories} calories
                </div>
            </div>

            <div>
                <h3>Difficulty</h3>
                <div>
                    <span>Easy</span>
                    <span>Medium</span>
                    <span>Hard</span>
                </div>
            </div>
        </section>
    );
};