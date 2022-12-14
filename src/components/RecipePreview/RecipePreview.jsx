import React from "react";
import "./RecipePreview.scss";
import food from "../../assets/images/food.png";
import { ReactComponent as IconOpen } from "../../assets/icons/open.svg";
import { ReactComponent as IconLightning } from "../../assets/icons/level.svg";
import { ReactComponent as IconTime } from "../../assets/icons/clock.svg";
import { ReactComponent as IconServing } from "../../assets/icons/serving.svg";
import { ReactComponent as IconTrash } from "../../assets/icons/trash.svg";
import { Link } from "react-router-dom";

const RecipePreview = (props) => {

    return (
        <div className={props.className}>
            <div className="recipe-preview-card__wrapper">
                <div className="recipe-preview-card__image-container">
                    <Link to={`/recipes/${props.recipe.id}`} className="recipe-preview-card__link">
                        <img src={food} alt="food" className="recipe__image" />
                        <IconOpen className="recipe-preview-card__icon-open" />
                    </Link>
                </div>
                <div className="recipe-preview-card__details">
                    <div className="recipe-preview-card__intro">
                        <h1 className="recipe-preview-card__title">{props.recipe.title}</h1>
                        <button onClick={() => props.remove(props.recipe)}>
                            <IconTrash />
                        </button>
                    </div>
                    <p className="recipe-preview-card__description">{props.recipe.description}</p>
                   
                    <ul className="recipe-preview-card__list">
                        <li className="recipe-preview-card__list-item">
                            <span className="recipe-preview-card__list-item-name">
                                <IconServing className="recipe__difficulty-icon" />
                                Serving
                            </span>
                            <span>{props.recipe.serving}</span>
                        </li>
                        <li className="recipe-preview-card__list-item">
                            <span className="recipe-preview-card__list-item-name">
                                <IconLightning className="recipe__difficulty-icon" />
                                Difficulty
                            </span>
                            <span>{props.recipe.difficulty}</span>
                        </li>
                        <li className="recipe-preview-card__list-item">
                            <span className="recipe-preview-card__list-item-name">
                                <IconTime className="recipe__difficulty-icon" />
                                Cooking time
                            </span>
                            <span>{props.recipe.time}</span>
                        </li>
                    </ul>
                </div>

            </div>



        </div>
    )
};

export default RecipePreview;