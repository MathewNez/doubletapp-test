import styled from "styled-components";
import {useState} from "react";
import ddIcon from "./drop-downList.png";

const SortList = ({handleSort}) => {

    const DropDownContainer = styled("div")``;
    const DropDownHeader = styled("div")`
      position: relative;
      display: flex;
      width: 180px;

      /* White */
      background: #FFFFFF;
      padding: 18px 15px 15px 15px;
      box-shadow: 0 7px 64px rgba(0, 0, 0, 0.07);
      border-radius: 6px;
      /* 12 */
      font-family: Geometria, serif;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
    `;
    const DropDownListContainer = styled("div")`
    `;
    const DropDownList = styled("ul")`
      position: absolute;
      z-index: 1;
      padding: 5px;
      /* White */
      background: #FFFFFF;

      /* 1 */
      box-shadow: 0 7px 64px rgba(0, 0, 0, 0.07);
      border-radius: 6px;
      width: 180px;
    `;
    const ListItem = styled("li")`
      list-style: none;
      font-family: Geometria, serif;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      margin-bottom: 4px;
      height: 16px;
      padding: 10px 0 7px 18px;
      border-radius: 5px;
      background: ${props => props.option === props.selected ? 'rgba(73, 194, 232, 0.11)' : 'none'};
    `;
    const ListIcon = styled("img")`
      width: 17px;
      height: 17px;
      position: absolute;
      right: 0;
      padding-right: 15px;
    `;

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const toggling = () => setIsOpen(!isOpen);

    const sortOptions =
        ['Имя А-Я', 'Имя Я-А', 'Сначала моложе', 'Сначала старше', 'Высокий рейтинг', 'Низкий рейтинг',];

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
        handleSort(value);
    };

    return (
        <DropDownContainer>
            <DropDownHeader onClick={toggling}>
                {selectedOption || sortOptions[0]}
                <ListIcon src={ddIcon}/>
            </DropDownHeader>
            {isOpen && (
                <DropDownListContainer>
                    <DropDownList>
                        {sortOptions.map((option, index) => {
                            return (
                                <ListItem onClick={onOptionClicked(option)} key={index} option={option} selected={selectedOption}>
                                    {option}
                                </ListItem>);
                        })}
                    </DropDownList>
                </DropDownListContainer>
            )}
        </DropDownContainer>
    );
}

export default SortList;