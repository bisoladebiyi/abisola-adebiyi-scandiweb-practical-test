import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";
import ContentWrapper from "SourceComponent/ContentWrapper/ContentWrapper.component";
import ProgressBar from "src/components/ProgressBar.Component";
import "./Checkout.override.style.scss";

export default class Checkout extends SourceCheckout {
  renderProgressBar() {
    return (
      <ProgressBar
        steps={this.stepMap}
        currentStep={this.stepMap[this.props.checkoutStep]}
      />
    );
  }
  render() {
    return (
      <main block="Checkout">
        {this.renderProgressBar()}
        <ContentWrapper
          wrapperMix={{ block: "Checkout", elem: "Wrapper" }}
          label={__("Checkout page")}
        >
          {this.renderSummary(true)}
          <div block="Checkout" elem="Step">
            {this.renderTitle()}
            {this.renderGuestForm()}
            {this.renderStep()}
            {this.renderLoader()}
          </div>
          <div>
            {this.renderSummary()}
            {this.renderPromo()}
            {this.renderCoupon()}
          </div>
        </ContentWrapper>
      </main>
    );
  }
}
