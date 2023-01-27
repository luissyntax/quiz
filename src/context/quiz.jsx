import { createContext, useReducer } from "react";

import questions from '../data/questions';

const STAGES = ['Start', 'Playing', 'End'];

const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
};

const quizRedoucer = (state, action) =>{

    switch(action.type) {
        case "CHAGE_STATE":
            return{
                ...state,
                gameStage: STAGES[1],
            }
        case "REORDER_QUESTIONS":
            const reorderedQuestions = questions.sort(() => {
                return Math.random() - .5;
            });

            return {
                ...state,
                questions: reorderedQuestions,
            };
        case "CHANGE_QUESTION":
            const nexQuestion =  state.currentQuestion + 1;
            return{
                ...state,
                currentQuestion: nexQuestion
            }

        default:
            return state
    };
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) =>{

    const value = useReducer(quizRedoucer, initialState);

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
};
