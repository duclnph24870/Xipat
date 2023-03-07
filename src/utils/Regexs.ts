class Regexs {
   public phone = /^[0-9]*$/;
   public optionalEmail = /^(?:[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4})?$/i;
   public email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i;
   public number = /^\d*\.?\d*$/;
   public decimal = /^[0-9]{1,7}(\.[0-9]{1,2})?$/;
   public load = /^(?=.*[1-9])\d*(?:\.\d*)?$/;
}

export default new Regexs();
