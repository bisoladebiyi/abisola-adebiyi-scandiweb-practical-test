import React, { Component } from "react";
import "../route/Checkout/Checkout.override.style.scss";

export default class ProgressBar extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
    };
    this.completedStep = this.completedStep.bind(this);
  }
  timer = () => setTimeout(() => {
    this.setState({ ...this.state, isActive: true });
  }, 500);

  componentDidMount() {
    this.timeoutID = this.timer()
  }
  componentWillUnmount() {
    clearTimeout(this.timeoutID);
  }
  completedStep(i) {
    if (i < this.props.currentStep) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    const { isActive } = this.state;
    const { steps, currentStep } = this.props;
    const stepsArr = Object.keys(steps);
    const indexOfActive = stepsArr.findIndex(
      (s) => steps[s].title === currentStep.title
    );
    return (
      <div>
        <div className="progressBar">
          <div className={`progress`}>
            <div className={`progress_color ${isActive ? "active" : ""}`}></div>
          </div>
          {stepsArr.slice(0, stepsArr.length - 1).map((step, i) => (
            <div
              key={steps[step].title}
              className="steps"
              style={{ width: i === stepsArr.length - 2 ? "auto" : "60%" }}
            >
              <div>
                <div
                  className={`steps_circle ${
                    currentStep.title === steps[step].title || indexOfActive > i
                      ? "active_step"
                      : ""
                  }`}
                >
                  <p className="step_number">
                    {i < indexOfActive ? (
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.4487 17.2796C11.3174 17.2798 11.1874 17.2542 11.0661 17.2041C10.9448 17.154 10.8345 17.0804 10.7417 16.9876L6.4997 12.7446C6.40412 12.6524 6.32786 12.5421 6.27537 12.4201C6.22288 12.2982 6.1952 12.167 6.19395 12.0342C6.19271 11.9014 6.21792 11.7697 6.26811 11.6468C6.3183 11.5238 6.39248 11.4121 6.4863 11.3182C6.58013 11.2242 6.69173 11.1499 6.81458 11.0995C6.93744 11.0492 7.0691 11.0238 7.20188 11.0248C7.33466 11.0259 7.4659 11.0534 7.58794 11.1057C7.70998 11.158 7.82038 11.2341 7.9127 11.3296L11.4477 14.8646L17.8127 8.50156C18.0002 8.31392 18.2546 8.20845 18.5198 8.20836C18.7851 8.20827 19.0396 8.31355 19.2272 8.50106C19.4148 8.68857 19.5203 8.94294 19.5204 9.20821C19.5205 9.47348 19.4152 9.72792 19.2277 9.91556L12.1557 16.9876C12.0629 17.0804 11.9526 17.154 11.8313 17.2041C11.71 17.2542 11.58 17.2798 11.4487 17.2796Z"
                          fill="#fff"
                        />
                      </svg>
                    ) : (
                      `${i + 1}`
                    )}
                  </p>
                  <p className="steps_title">{steps[step].title}</p>
                </div>
              </div>
              {i !== stepsArr.length - 2 && (
                <div className={"progress inner"}>
                  <div
                    className={`progress_color ${
                      indexOfActive > i ? "active" : ""
                    }`}
                  ></div>
                </div>
              )}
            </div>
          ))}
          <div className="progress">
            <div
              className={`progress_color ${
                indexOfActive === stepsArr.length - 1 ? "active" : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}
