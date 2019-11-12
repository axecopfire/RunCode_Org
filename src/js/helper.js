

  /**
   * Creates a DOM element with given options
   * 
   * @param {string} [name] name of element to be created
   * @param {object} options 
   * *Takes options that will describe element*
   * 
   * @param {array|string} options.class
   * @param {string} options.id
   * @param {string} options.style
   * @return {object} Created element
   */
module.exports.createEl = function (name, options) {
    var element = document.createElement(name);

    if(!options) options = {};
    // Handle options
    if(options.class) {
      if(Array.isArray(options.class)) {
        options.class.forEach(
          name => element.classList.add(name));
      } else {
        element.classList.add(options.class)
      }
    }

    if(options.id) element.id = options.id;
    if(options.style) element.style = options.style;

    return element;
  }
