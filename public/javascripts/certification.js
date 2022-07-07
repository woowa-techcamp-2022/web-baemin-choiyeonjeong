const handleInputFocusChange = (e) => {
  e.target.closest("label").classList.add("focus");
};

const handlePhoneInputHyphen = (e) => {
  e.target.value = e.target.value
    .replace(/[^0-9]/g, "")
    .replace(
      /(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,
      "$1-$2-$3"
    )
    .replace("--", "-");
};

const isFillInputMaxLength = (target) => {
  return target.value.length === target.maxLength;
};

const handleNextPage = () => {
  window.location.href = "/join/details";
};

const activeNextPageButton = () => {
  const checkInputCnt = [...document.querySelectorAll(".filled")].length;
  const nextButton = document.querySelector(".next");
  if (checkInputCnt === 2) {
    nextButton.disabled = false;
    nextButton.addEventListener("click", handleNextPage);
  } else {
    nextButton.disabled = true;
    nextButton.removeEventListener("click", handleNextPage);
  }
};

const handleCheckFillInput = (e) => {
  if (isFillInputMaxLength(e.target)) {
    e.target.classList.add("filled");
  } else {
    e.target.classList.remove("filled");
  }

  activeNextPageButton();
};

const fakeSendAction = (callback) => {
  return setTimeout(() => {
    callback();
  }, 2000);
};

const getRandomCertificationNumber = () => {
  return Math.floor(1000 + Math.random() * 9000);
};

function buttonEl($page, selector) {
  this.$target = $page.querySelector(selector);

  this.init = () => {
    this.initEventListeners();
  };

  this.initEventListeners = () => {};

  this.setEvent = (type, listener) => {
    this.$target.addEventListener(type, listener);
  };

  this.init();
}

function inputEl($page, selector) {
  this.$target = $page.querySelector(selector);

  const cancelBtn = document.createElement("button");
  const cancelIcon = document.createElement("img");

  cancelIcon.src = "/images/cancel-circle.png";
  cancelBtn.classList.add("cancel");
  cancelBtn.type = "button";
  cancelBtn.appendChild(cancelIcon);

  this.$target.parentNode.insertBefore(cancelBtn, this.$target.nextSibling);

  this.init = () => {
    this.initEventListeners();
  };

  this.setValue = (newValue) => {
    this.$target.value = newValue;
  };

  this.removeFocus = () => {
    this.$target.closest("label").classList.remove("focus");
  };

  this.initEventListeners = () => {
    this.$target.addEventListener("focus", handleInputFocusChange);
    this.$target.addEventListener("keyup", handleCheckFillInput);
    this.$target.addEventListener("change", handleCheckFillInput);

    cancelBtn.addEventListener("click", (e) => {
      if (e.target.closest(".cancel")) {
        this.$target.value = "";
        this.$target.classList.remove("filled");
        return;
      }
    });
  };

  this.setEvent = (type, listener) => {
    this.$target.addEventListener(type, listener);
  };

  this.init();
}

function certificationPage($target) {
  const inputPhone = new inputEl($target, "#phone");
  inputPhone.setEvent("keyup", handlePhoneInputHyphen);

  const certificationNumber = new inputEl($target, "#cNumber");

  const btnSend = new buttonEl($target, ".send-number");
  const btnResend = new buttonEl($target, ".resend");

  btnSend.setEvent("click", (e) => {
    e.preventDefault();
    certificationNumber.$target.closest(".certification-number").style.display =
      "block";
    fakeSendAction(() => {
      certificationNumber.setValue(getRandomCertificationNumber());
      certificationNumber.$target.dispatchEvent(new Event("change"));
    });
  });

  btnResend.setEvent("click", (e) => {
    e.preventDefault();
    fakeSendAction(() => {
      certificationNumber.setValue(getRandomCertificationNumber());
      certificationNumber.$target.dispatchEvent(new Event("change"));
    });
  });

  this.init = () => {
    initEventListeners();
  };

  const initEventListeners = () => {
    $target.addEventListener("click", (e) => {
      if (e.target.tagName === "INPUT") {
        return;
      }

      inputPhone.removeFocus();
      certificationNumber.removeFocus();
    });
  };
}

const page = new certificationPage(
  document.querySelector(".certification-wrapper")
);
page.init();
