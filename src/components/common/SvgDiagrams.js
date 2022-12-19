import React from "react";
import PropTypes from "prop-types";

export const SvgDiagrams = props => {
    const diagrams ={
        "home": (
            <svg className={props.className} aria-label={props.name} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.9975 2.38811C9.56767 1.87584 10.4323 1.87584 11.0025 2.38811L16.5025 7.32965C16.8191 7.61414 17 8.01977 17 8.44544V15.4996C17 16.328 16.3284 16.9996 15.5 16.9996H13C12.1716 16.9996 11.5 16.328 11.5 15.4996V11.9996C11.5 11.7234 11.2761 11.4996 11 11.4996H9C8.72386 11.4996 8.5 11.7234 8.5 11.9996V15.4996C8.5 16.328 7.82843 16.9996 7 16.9996H4.5C3.67157 16.9996 3 16.328 3 15.4996V8.44544C3 8.01977 3.18086 7.61414 3.4975 7.32965L8.9975 2.38811ZM10.3342 3.13197C10.1441 2.96122 9.85589 2.96122 9.66583 3.13197L4.16583 8.07351C4.06029 8.16834 4 8.30355 4 8.44544V15.4996C4 15.7757 4.22386 15.9996 4.5 15.9996H7C7.27614 15.9996 7.5 15.7757 7.5 15.4996V11.9996C7.5 11.1711 8.17157 10.4996 9 10.4996H11C11.8284 10.4996 12.5 11.1711 12.5 11.9996V15.4996C12.5 15.7757 12.7239 15.9996 13 15.9996H15.5C15.7761 15.9996 16 15.7757 16 15.4996V8.44544C16 8.30355 15.9397 8.16834 15.8342 8.07351L10.3342 3.13197Z" fill={props.fill}/>
            </svg>            
        ),
        "visited" : (
            <svg className={props.className} aria-label={props.name} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 2C7.77614 2 8 2.22386 8 2.5V4.5C8 4.77614 7.77614 5 7.5 5C7.22386 5 7 4.77614 7 4.5V2.5C7 2.22386 7.22386 2 7.5 2ZM3.61091 3.61091C3.80618 3.41565 4.12276 3.41565 4.31802 3.61091L5.73223 5.02513C5.9275 5.22039 5.9275 5.53697 5.73223 5.73223C5.53697 5.92749 5.22039 5.92749 5.02513 5.73223L3.61091 4.31802C3.41565 4.12276 3.41565 3.80617 3.61091 3.61091ZM11.3891 3.61091C11.5843 3.80617 11.5843 4.12276 11.3891 4.31802L9.97487 5.73223C9.77961 5.9275 9.46303 5.9275 9.26777 5.73223C9.0725 5.53697 9.0725 5.22039 9.26777 5.02513L10.682 3.61091C10.8772 3.41565 11.1938 3.41565 11.3891 3.61091ZM2 7.5C2 7.22386 2.22386 7 2.5 7H4.5C4.77614 7 5 7.22386 5 7.5C5 7.77614 4.77614 8 4.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM8.64019 7.2993C7.98886 6.75653 7 7.21968 7 8.06752V17.1693C7 18.0926 8.14454 18.5227 8.75258 17.8278L10.7787 15.5122C11.0635 15.1867 11.475 15 11.9075 15H15.119C16.0543 15 16.4777 13.8305 15.7592 13.2318L8.64019 7.2993ZM8 17.1693L8 8.06752L15.119 14H11.9075C11.1866 14 10.5008 14.3112 10.0261 14.8537L8 17.1693Z" fill={props.fill}/>
            <path d="M7.5 2C7.77614 2 8 2.22386 8 2.5V4.5C8 4.77614 7.77614 5 7.5 5C7.22386 5 7 4.77614 7 4.5V2.5C7 2.22386 7.22386 2 7.5 2ZM3.61091 3.61091C3.80618 3.41565 4.12276 3.41565 4.31802 3.61091L5.73223 5.02513C5.9275 5.22039 5.9275 5.53697 5.73223 5.73223C5.53697 5.92749 5.22039 5.92749 5.02513 5.73223L3.61091 4.31802C3.41565 4.12276 3.41565 3.80617 3.61091 3.61091ZM11.3891 3.61091C11.5843 3.80617 11.5843 4.12276 11.3891 4.31802L9.97487 5.73223C9.77961 5.9275 9.46303 5.9275 9.26777 5.73223C9.0725 5.53697 9.0725 5.22039 9.26777 5.02513L10.682 3.61091C10.8772 3.41565 11.1938 3.41565 11.3891 3.61091ZM2 7.5C2 7.22386 2.22386 7 2.5 7H4.5C4.77614 7 5 7.22386 5 7.5C5 7.77614 4.77614 8 4.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM8.64019 7.2993C7.98886 6.75653 7 7.21968 7 8.06752V17.1693C7 18.0926 8.14454 18.5227 8.75258 17.8278L10.7787 15.5122C11.0635 15.1867 11.475 15 11.9075 15H15.119C16.0543 15 16.4777 13.8305 15.7592 13.2318L8.64019 7.2993ZM8 17.1693L8 8.06752L15.119 14H11.9075C11.1866 14 10.5008 14.3112 10.0261 14.8537L8 17.1693Z" fill={props.fill}/>
            </svg>
        ),
        "chevron" : (
            <svg className={props.className} aria-label={props.name} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.46967 2.21967C4.17678 2.51256 4.17678 2.98744 4.46967 3.28033L7.18934 6L4.46967 8.71967C4.17678 9.01256 4.17678 9.48744 4.46967 9.78033C4.76256 10.0732 5.23744 10.0732 5.53033 9.78033L8.78033 6.53033C9.07322 6.23744 9.07322 5.76256 8.78033 5.46967L5.53033 2.21967C5.23744 1.92678 4.76256 1.92678 4.46967 2.21967Z" fill={props.fill}/>
            </svg>
        ),
        "dataP" : (
            <svg className={props.className} aria-label={props.name} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.64728 2.14638C7.84268 1.95105 8.15946 1.95123 8.35464 2.14678C9.5947 3.38913 10.9689 4 12.5 4C12.7761 4 13 4.22386 13 4.5V5.40135C12.6963 5.22567 12.359 5.1017 12 5.04148V4.98121C10.5195 4.86895 9.18521 4.25528 8.00042 3.18917C6.81393 4.25491 5.47941 4.86879 4 4.98118V7.50126C4 8.9349 4.36269 10.0655 5.02127 10.9453C5.49089 11.5727 6.14168 12.1134 7 12.5478V13.6523C4.35378 12.4971 3 10.4242 3 7.50126V4.5C3 4.22386 3.22386 4 3.5 4C5.02923 4 6.40416 3.38902 7.64728 2.14638ZM9.5 8V9H9C8.44772 9 8 9.44772 8 10V14C8 14.5523 8.44771 15 9 15H14C14.5523 15 15 14.5523 15 14V10C15 9.44772 14.5523 9 14 9H13.5V8C13.5 6.89543 12.6046 6 11.5 6C10.3954 6 9.5 6.89543 9.5 8ZM10.5 9V8C10.5 7.44772 10.9477 7 11.5 7C12.0523 7 12.5 7.44772 12.5 8V9H10.5ZM11.5 11.25C11.9142 11.25 12.25 11.5858 12.25 12C12.25 12.4142 11.9142 12.75 11.5 12.75C11.0858 12.75 10.75 12.4142 10.75 12C10.75 11.5858 11.0858 11.25 11.5 11.25Z" fill={props.fill}/>
            <path d="M7.64728 2.14638C7.84268 1.95105 8.15946 1.95123 8.35464 2.14678C9.5947 3.38913 10.9689 4 12.5 4C12.7761 4 13 4.22386 13 4.5V5.40135C12.6963 5.22567 12.359 5.1017 12 5.04148V4.98121C10.5195 4.86895 9.18521 4.25528 8.00042 3.18917C6.81393 4.25491 5.47941 4.86879 4 4.98118V7.50126C4 8.9349 4.36269 10.0655 5.02127 10.9453C5.49089 11.5727 6.14168 12.1134 7 12.5478V13.6523C4.35378 12.4971 3 10.4242 3 7.50126V4.5C3 4.22386 3.22386 4 3.5 4C5.02923 4 6.40416 3.38902 7.64728 2.14638ZM9.5 8V9H9C8.44772 9 8 9.44772 8 10V14C8 14.5523 8.44771 15 9 15H14C14.5523 15 15 14.5523 15 14V10C15 9.44772 14.5523 9 14 9H13.5V8C13.5 6.89543 12.6046 6 11.5 6C10.3954 6 9.5 6.89543 9.5 8ZM10.5 9V8C10.5 7.44772 10.9477 7 11.5 7C12.0523 7 12.5 7.44772 12.5 8V9H10.5ZM11.5 11.25C11.9142 11.25 12.25 11.5858 12.25 12C12.25 12.4142 11.9142 12.75 11.5 12.75C11.0858 12.75 10.75 12.4142 10.75 12C10.75 11.5858 11.0858 11.25 11.5 11.25Z" fill={props.fill}/>
            </svg>
        ),
        "chevronup" : (
            <svg className={props.className} aria-label={props.name} width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.21967 8.03033C2.51256 8.32322 2.98744 8.32322 3.28033 8.03033L6 5.31066L8.71967 8.03033C9.01256 8.32322 9.48744 8.32322 9.78033 8.03033C10.0732 7.73744 10.0732 7.26256 9.78033 6.96967L6.53033 3.71967C6.23744 3.42678 5.76256 3.42678 5.46967 3.71967L2.21967 6.96967C1.92678 7.26256 1.92678 7.73744 2.21967 8.03033Z" fill={props.fill}/>
            <path d="M2.21967 8.03033C2.51256 8.32322 2.98744 8.32322 3.28033 8.03033L6 5.31066L8.71967 8.03033C9.01256 8.32322 9.48744 8.32322 9.78033 8.03033C10.0732 7.73744 10.0732 7.26256 9.78033 6.96967L6.53033 3.71967C6.23744 3.42678 5.76256 3.42678 5.46967 3.71967L2.21967 6.96967C1.92678 7.26256 1.92678 7.73744 2.21967 8.03033Z" fill={props.fill}/>
            </svg>
        ),
        "chevrondown" : (
            <svg className={props.className} aria-label={props.name} width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.21967 4.96967C2.51256 4.67678 2.98744 4.67678 3.28033 4.96967L6 7.68934L8.71967 4.96967C9.01256 4.67678 9.48744 4.67678 9.78033 4.96967C10.0732 5.26256 10.0732 5.73744 9.78033 6.03033L6.53033 9.28033C6.23744 9.57322 5.76256 9.57322 5.46967 9.28033L2.21967 6.03033C1.92678 5.73744 1.92678 5.26256 2.21967 4.96967Z" fill={props.fill}/>
            <path d="M2.21967 4.96967C2.51256 4.67678 2.98744 4.67678 3.28033 4.96967L6 7.68934L8.71967 4.96967C9.01256 4.67678 9.48744 4.67678 9.78033 4.96967C10.0732 5.26256 10.0732 5.73744 9.78033 6.03033L6.53033 9.28033C6.23744 9.57322 5.76256 9.57322 5.46967 9.28033L2.21967 6.03033C1.92678 5.73744 1.92678 5.26256 2.21967 4.96967Z" fill={props.fill}/>
            </svg>
        ),
        "dataG" : (
            <svg className={props.className} aria-label={props.name} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.35464 2.14678C8.15946 1.95123 7.84268 1.95105 7.64728 2.14638C6.40416 3.38902 5.02923 4 3.5 4C3.22386 4 3 4.22386 3 4.5V7.50126C3 10.7196 4.64126 12.9075 7.84189 13.9743C7.94452 14.0086 8.05548 14.0086 8.15811 13.9743C11.3587 12.9075 13 10.7196 13 7.50126V4.5C13 4.22386 12.7761 4 12.5 4C10.9689 4 9.5947 3.38913 8.35464 2.14678ZM10.8536 6.14645C11.0488 6.34171 11.0488 6.65829 10.8536 6.85355L7.85355 9.85355C7.65829 10.0488 7.34171 10.0488 7.14645 9.85355L5.64686 8.35397C5.4516 8.15871 5.45118 7.84171 5.64645 7.64645C5.84171 7.45118 6.15829 7.45118 6.35355 7.64645L7.5 8.79289L10.146 6.14686C10.3413 5.9516 10.6583 5.95118 10.8536 6.14645Z" fill={props.fill}/>
            <path d="M8.35464 2.14678C8.15946 1.95123 7.84268 1.95105 7.64728 2.14638C6.40416 3.38902 5.02923 4 3.5 4C3.22386 4 3 4.22386 3 4.5V7.50126C3 10.7196 4.64126 12.9075 7.84189 13.9743C7.94452 14.0086 8.05548 14.0086 8.15811 13.9743C11.3587 12.9075 13 10.7196 13 7.50126V4.5C13 4.22386 12.7761 4 12.5 4C10.9689 4 9.5947 3.38913 8.35464 2.14678ZM10.8536 6.14645C11.0488 6.34171 11.0488 6.65829 10.8536 6.85355L7.85355 9.85355C7.65829 10.0488 7.34171 10.0488 7.14645 9.85355L5.64686 8.35397C5.4516 8.15871 5.45118 7.84171 5.64645 7.64645C5.84171 7.45118 6.15829 7.45118 6.35355 7.64645L7.5 8.79289L10.146 6.14686C10.3413 5.9516 10.6583 5.95118 10.8536 6.14645Z" fill={props.fill}/>
            </svg>
        ),
        "cyber" : (
            <svg className={props.className} aria-label={props.name} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 5C6.77614 5 7 4.77614 7 4.5C7 4.22386 6.77614 4 6.5 4C6.22386 4 6 4.22386 6 4.5C6 4.77614 6.22386 5 6.5 5ZM7 7C7 7.27614 6.77614 7.5 6.5 7.5C6.22386 7.5 6 7.27614 6 7C6 6.72386 6.22386 6.5 6.5 6.5C6.77614 6.5 7 6.72386 7 7ZM6.5 10C6.77614 10 7 9.77614 7 9.5C7 9.22386 6.77614 9 6.5 9C6.22386 9 6 9.22386 6 9.5C6 9.77614 6.22386 10 6.5 10ZM9 4.5C9 4.77614 8.77614 5 8.5 5C8.22386 5 8 4.77614 8 4.5C8 4.22386 8.22386 4 8.5 4C8.77614 4 9 4.22386 9 4.5ZM8.5 7.5C8.77614 7.5 9 7.27614 9 7C9 6.72386 8.77614 6.5 8.5 6.5C8.22386 6.5 8 6.72386 8 7C8 7.27614 8.22386 7.5 8.5 7.5ZM9 9.5C9 9.77614 8.77614 10 8.5 10C8.22386 10 8 9.77614 8 9.5C8 9.22386 8.22386 9 8.5 9C8.77614 9 9 9.22386 9 9.5ZM10.5 10C10.7761 10 11 9.77614 11 9.5C11 9.22386 10.7761 9 10.5 9C10.2239 9 10 9.22386 10 9.5C10 9.77614 10.2239 10 10.5 10ZM5.5 2C4.67157 2 4 2.67157 4 3.5V13.5C4 13.7761 4.22386 14 4.5 14H12.5C12.7761 14 13 13.7761 13 13.5V8.5C13 7.67157 12.3284 7 11.5 7H11V3.5C11 2.67157 10.3284 2 9.5 2H5.5ZM5 3.5C5 3.22386 5.22386 3 5.5 3H9.5C9.77614 3 10 3.22386 10 3.5V7.5C10 7.77614 10.2239 8 10.5 8H11.5C11.7761 8 12 8.22386 12 8.5V13H11V11.5C11 11.2239 10.7761 11 10.5 11H6.5C6.22386 11 6 11.2239 6 11.5V13H5V3.5ZM10 12V13H9.00252V12H10ZM8.00252 12V13H7V12H8.00252Z" fill={props.fill}/>
            <path d="M6.5 5C6.77614 5 7 4.77614 7 4.5C7 4.22386 6.77614 4 6.5 4C6.22386 4 6 4.22386 6 4.5C6 4.77614 6.22386 5 6.5 5ZM7 7C7 7.27614 6.77614 7.5 6.5 7.5C6.22386 7.5 6 7.27614 6 7C6 6.72386 6.22386 6.5 6.5 6.5C6.77614 6.5 7 6.72386 7 7ZM6.5 10C6.77614 10 7 9.77614 7 9.5C7 9.22386 6.77614 9 6.5 9C6.22386 9 6 9.22386 6 9.5C6 9.77614 6.22386 10 6.5 10ZM9 4.5C9 4.77614 8.77614 5 8.5 5C8.22386 5 8 4.77614 8 4.5C8 4.22386 8.22386 4 8.5 4C8.77614 4 9 4.22386 9 4.5ZM8.5 7.5C8.77614 7.5 9 7.27614 9 7C9 6.72386 8.77614 6.5 8.5 6.5C8.22386 6.5 8 6.72386 8 7C8 7.27614 8.22386 7.5 8.5 7.5ZM9 9.5C9 9.77614 8.77614 10 8.5 10C8.22386 10 8 9.77614 8 9.5C8 9.22386 8.22386 9 8.5 9C8.77614 9 9 9.22386 9 9.5ZM10.5 10C10.7761 10 11 9.77614 11 9.5C11 9.22386 10.7761 9 10.5 9C10.2239 9 10 9.22386 10 9.5C10 9.77614 10.2239 10 10.5 10ZM5.5 2C4.67157 2 4 2.67157 4 3.5V13.5C4 13.7761 4.22386 14 4.5 14H12.5C12.7761 14 13 13.7761 13 13.5V8.5C13 7.67157 12.3284 7 11.5 7H11V3.5C11 2.67157 10.3284 2 9.5 2H5.5ZM5 3.5C5 3.22386 5.22386 3 5.5 3H9.5C9.77614 3 10 3.22386 10 3.5V7.5C10 7.77614 10.2239 8 10.5 8H11.5C11.7761 8 12 8.22386 12 8.5V13H11V11.5C11 11.2239 10.7761 11 10.5 11H6.5C6.22386 11 6 11.2239 6 11.5V13H5V3.5ZM10 12V13H9.00252V12H10ZM8.00252 12V13H7V12H8.00252Z" fill={props.fill}/>
            </svg>
        ),
        "allServices" : (
            <svg className={props.className} aria-label={props.name} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 17C3.7203 17 3.07955 16.4051 3.00687 15.6445L3 15.5V4.5C3 3.7203 3.59489 3.07955 4.35554 3.00687L4.5 3H9C9.7797 3 10.4204 3.59489 10.4931 4.35554L10.5 4.5V4.75443L12.6886 2.48518C13.2276 1.92599 14.0959 1.87568 14.6956 2.34707L14.8118 2.4483L17.5694 5.17295C18.1219 5.71884 18.1614 6.58769 17.68 7.18413L17.5767 7.29961L15.266 9.49943L15.5 9.5C16.2797 9.5 16.9204 10.0949 16.9931 10.8555L17 11V15.5C17 16.2797 16.4051 16.9204 15.6445 16.9931L15.5 17H4.5ZM9.5 10.5H4V15.5C4 15.7148 4.13542 15.8979 4.32553 15.9687L4.41012 15.9919L4.5 16H9.5V10.5ZM15.5 10.5H10.5V16H15.5C15.7455 16 15.9496 15.8231 15.9919 15.5899L16 15.5V11C16 10.7545 15.8231 10.5504 15.5899 10.5081L15.5 10.5ZM10.5 7.70943V9.49943H12.29L10.5 7.70943ZM9 4H4.5C4.25454 4 4.05039 4.17688 4.00806 4.41012L4 4.5V9.5H9.5V4.5C9.5 4.28522 9.36458 4.10207 9.17447 4.03128L9.08988 4.00806L9 4ZM14.1222 3.17265C13.9396 2.99652 13.6692 2.98155 13.4768 3.12004L13.4086 3.17915L10.7926 5.89329C10.6271 6.065 10.6086 6.32501 10.7356 6.51644L10.799 6.59383L13.4147 9.20955C13.5826 9.37746 13.8409 9.40135 14.0345 9.27931L14.1131 9.21806L16.8708 6.59139C17.0433 6.41679 17.061 6.14725 16.9248 5.95319L16.8665 5.88429L14.1222 3.17265Z" fill={props.fill}/>
            </svg>
        ),
        "admin" : (
            <svg className={props.className} aria-label={props.name} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.64728 2.14638C7.84268 1.95105 8.15946 1.95123 8.35464 2.14678C9.5947 3.38913 10.9689 4 12.5 4C12.7761 4 13 4.22386 13 4.5V5.40135C12.6963 5.22567 12.359 5.1017 12 5.04148V4.98121C10.5195 4.86895 9.18521 4.25528 8.00042 3.18917C6.81393 4.25491 5.47941 4.86879 4 4.98118V7.50126C4 8.9349 4.36269 10.0655 5.02127 10.9453C5.49089 11.5727 6.14168 12.1134 7 12.5478V13.6523C4.35378 12.4971 3 10.4242 3 7.50126V4.5C3 4.22386 3.22386 4 3.5 4C5.02923 4 6.40416 3.38902 7.64728 2.14638ZM9.5 8V9H9C8.44772 9 8 9.44772 8 10V14C8 14.5523 8.44771 15 9 15H14C14.5523 15 15 14.5523 15 14V10C15 9.44772 14.5523 9 14 9H13.5V8C13.5 6.89543 12.6046 6 11.5 6C10.3954 6 9.5 6.89543 9.5 8ZM10.5 9V8C10.5 7.44772 10.9477 7 11.5 7C12.0523 7 12.5 7.44772 12.5 8V9H10.5ZM11.5 11.25C11.9142 11.25 12.25 11.5858 12.25 12C12.25 12.4142 11.9142 12.75 11.5 12.75C11.0858 12.75 10.75 12.4142 10.75 12C10.75 11.5858 11.0858 11.25 11.5 11.25Z" fill={props.fill}/>
            <path d="M7.64728 2.14638C7.84268 1.95105 8.15946 1.95123 8.35464 2.14678C9.5947 3.38913 10.9689 4 12.5 4C12.7761 4 13 4.22386 13 4.5V5.40135C12.6963 5.22567 12.359 5.1017 12 5.04148V4.98121C10.5195 4.86895 9.18521 4.25528 8.00042 3.18917C6.81393 4.25491 5.47941 4.86879 4 4.98118V7.50126C4 8.9349 4.36269 10.0655 5.02127 10.9453C5.49089 11.5727 6.14168 12.1134 7 12.5478V13.6523C4.35378 12.4971 3 10.4242 3 7.50126V4.5C3 4.22386 3.22386 4 3.5 4C5.02923 4 6.40416 3.38902 7.64728 2.14638ZM9.5 8V9H9C8.44772 9 8 9.44772 8 10V14C8 14.5523 8.44771 15 9 15H14C14.5523 15 15 14.5523 15 14V10C15 9.44772 14.5523 9 14 9H13.5V8C13.5 6.89543 12.6046 6 11.5 6C10.3954 6 9.5 6.89543 9.5 8ZM10.5 9V8C10.5 7.44772 10.9477 7 11.5 7C12.0523 7 12.5 7.44772 12.5 8V9H10.5ZM11.5 11.25C11.9142 11.25 12.25 11.5858 12.25 12C12.25 12.4142 11.9142 12.75 11.5 12.75C11.0858 12.75 10.75 12.4142 10.75 12C10.75 11.5858 11.0858 11.25 11.5 11.25Z" fill={props.fill}/>
            </svg>
        ),
        "logo" : (
            <svg className={props.className} aria-label={props.name} width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.9549 7.96347L13.3942 8.65089C13.8968 9.45512 14.2864 10.3247 14.5519 11.2351C14.8205 12.1822 14.9305 13.1672 14.8776 14.1502C14.7795 15.4829 14.5957 16.8079 14.3271 18.117C14.6708 17.9335 14.9913 17.7836 15.3014 17.6002C15.9744 17.2035 16.6071 16.7422 17.1905 16.2228C17.7361 15.7032 18.231 15.133 18.6687 14.5197C19.1597 13.8066 19.5754 13.0445 19.9091 12.2456C20.1939 11.6104 20.4407 10.9589 20.6482 10.2945C20.6715 10.2221 20.6921 10.1342 20.7128 10.0593C18.4017 8.58948 15.6967 7.86093 12.96 7.97123L12.9549 7.96347ZM3.45257 14.5249C3.44748 14.5574 3.44748 14.5906 3.45257 14.6231C3.58178 14.9229 3.69807 15.233 3.83762 15.5224C4.17518 16.2059 4.58868 16.8491 5.07031 17.4399C5.47095 17.9332 5.91555 18.389 6.39862 18.8018L6.73199 19.0603C7.43159 19.5516 8.17873 19.9715 8.9622 20.3136C9.49283 20.5514 10.0286 20.7693 10.5696 20.9674C10.9977 21.1333 11.4341 21.2764 11.8772 21.3964C11.9324 21.3129 11.9833 21.2267 12.0297 21.138L12.5 20.1973C12.8284 19.5456 13.1049 18.869 13.327 18.1739C13.5314 17.5089 13.6784 16.8276 13.7663 16.1375C13.8309 15.724 13.8852 15.1038 13.8955 14.8298C13.9266 14.3595 13.8955 13.8866 13.8955 13.4137V13.2043C9.53074 14.8453 6.34952 15.1968 3.42931 14.5559L3.45257 14.5249ZM0.0206785 12.243L0.599549 12.5557C1.06988 12.7909 1.55314 13.0364 2.03639 13.2509C2.33285 13.3856 2.63653 13.5038 2.94605 13.6049C3.87818 13.9081 4.85247 14.0616 5.83267 14.0597C6.1221 14.0597 6.41154 14.0391 6.71131 14.0184C7.18308 13.9845 7.65248 13.9232 8.11715 13.8349L7.90007 13.4498C7.78119 13.1914 7.6649 12.933 7.54603 12.6901C7.32943 12.2242 7.14466 11.7441 6.99299 11.2532C6.82678 10.7391 6.68876 10.2163 6.57952 9.68717C6.4839 9.22717 6.45289 8.75426 6.39862 8.29426C6.37664 7.95866 6.37664 7.62199 6.39862 7.2864C6.39862 6.95562 6.4193 6.62225 6.45031 6.29146C6.48132 5.96068 6.47356 5.92708 6.49424 5.73843C6.5485 5.32495 6.62345 4.92439 6.68805 4.51608C6.75266 4.10777 6.80435 3.96563 6.85862 3.70204C6.85862 3.63743 6.87929 3.57283 6.88963 3.49788C6.38953 3.76819 5.90625 4.06851 5.44244 4.3972C4.87582 4.79423 4.34177 5.23581 3.84537 5.71776C3.45427 6.08771 3.0825 6.47759 2.73156 6.88584C2.21987 7.51285 1.78117 8.19604 1.42393 8.92223C1.17842 9.40549 0.953592 9.89908 0.728762 10.3927C0.452496 11.0002 0.20922 11.6222 0 12.2559L0.0206785 12.243ZM9.51782 0.665538C10.2362 0.900705 10.9443 1.14621 11.6291 1.44081C12.508 1.80546 13.3514 2.2501 14.1488 2.76912C14.5874 3.07501 14.9967 3.42107 15.3712 3.80282C16.0036 4.44058 16.5548 5.15408 17.0122 5.92708C17.3532 6.50393 17.6437 7.10918 17.8805 7.73606C14.4035 6.76636 10.6856 7.18904 7.51502 8.91448C7.43498 8.34699 7.39869 7.77418 7.40648 7.20112C7.4194 6.78764 7.42973 6.38449 7.46074 5.97877C7.49176 5.57304 7.53569 5.14147 7.61064 4.72282C7.72334 4.11025 7.89646 3.51035 8.12749 2.93193C8.31869 2.45176 8.53609 1.98244 8.77872 1.5261C8.94152 1.21598 9.13276 0.916211 9.29557 0.603516L9.49973 0.657785L9.51782 0.665538Z" fill={props.fill}/>
            </svg>
        ),
        "menu" : (
            <svg className={props.className} aria-label={props.name} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.71289 18L19.7129 18M5.71289 12H19.7129M5.71289 6H20" stroke={props.stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        )
    };
    return diagrams[props.name];
}

SvgDiagrams.defaultProps = {
    className: "",
};

SvgDiagrams.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
};
