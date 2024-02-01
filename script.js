// import React from 'react';
// import ReactDOM from 'react-dom';
// import * as d3 from 'd3v4';
// import './index.css';

// const { func } = require("prop-types");

/**
 * An HTML5 range slider and associated raw text input.
 *
 * Properties:
 *    - min: The minimum allowed value for the slider range
 *    - max: The maximum allowed value for the slider range
 *    - value: The current value of the slider
 *    - disabled: Whether or not to disable the slider.  A slider
 *      is automatically disabled when min == max.
 *    - onChange: Callback when the value of this slider changes.
 */
function Slider(props) {
  const max = parseInt(props.max, 10);
  const min = parseInt(props.min, 10);
  const maxLength = max ? Math.ceil(Math.log10(max)) : 1;
  const disabled = props.disabled || min >= max;
  return /*#__PURE__*/React.createElement("span", {
    className: "slider"
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: min,
    max: max,
    value: props.value,
    onChange: props.onChange,
    disabled: disabled
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: props.value,
    onChange: props.onChange,
    maxLength: maxLength,
    disabled: disabled,
    size: Math.max(maxLength, 2)
  }));
}
function Sliders2(props) {
  const max1 = parseInt(props.max1, 10);
  const min1 = parseInt(props.min1, 10);
  const maxLength1 = max1 ? Math.ceil(Math.log10(max1)) : 1;
  const disabled1 = props.disabled1 || min1 >= max1;
  const max2 = parseInt(props.max2, 10);
  const min2 = parseInt(props.min2, 10);
  const maxLength2 = max2 ? Math.ceil(Math.log10(max2)) : 1;
  const disabled2 = props.disabled2 || min2 >= max2;
  return /*#__PURE__*/React.createElement("span", {
    className: "sliders2"
  }, "X:\xA0", /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: min1,
    max: max1,
    value: props.value1,
    onChange: props.onChange1,
    disabled: disabled1
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: props.value1,
    onChange: props.onChange1,
    maxLength: maxLength1,
    disabled: disabled1,
    size: Math.max(maxLength1, 2)
  }), /*#__PURE__*/React.createElement("br", null), "Y:\xA0", /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: min2,
    max: max2,
    value: props.value2,
    onChange: props.onChange2,
    disabled: disabled2
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: props.value2,
    onChange: props.onChange2,
    maxLength: maxLength2,
    disabled: disabled2,
    size: Math.max(maxLength2, 2)
  }));
}
function Sliders4(props) {
  const max1 = parseInt(props.max1, 10);
  const min1 = parseInt(props.min1, 10);
  const maxLength1 = max1 ? Math.ceil(Math.log10(max1)) : 1;
  const disabled1 = props.disabled1 || min1 >= max1;
  const max2 = parseInt(props.max2, 10);
  const min2 = parseInt(props.min2, 10);
  const maxLength2 = max2 ? Math.ceil(Math.log10(max2)) : 1;
  const disabled2 = props.disabled2 || min2 >= max2;
  const max3 = parseInt(props.max3, 10);
  const min3 = parseInt(props.min3, 10);
  const maxLength3 = max3 ? Math.ceil(Math.log10(max3)) : 1;
  const disabled3 = props.disabled3 || min3 >= max3;
  const max4 = parseInt(props.max4, 10);
  const min4 = parseInt(props.min4, 10);
  const maxLength4 = max4 ? Math.ceil(Math.log10(max4)) : 1;
  const disabled4 = props.disabled4 || min4 >= max4;
  return /*#__PURE__*/React.createElement("span", {
    className: "sliders4"
  }, "L:\xA0", /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: min1,
    max: max1,
    value: props.value1,
    onChange: props.onChange1,
    disabled: disabled1
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: props.value1,
    onChange: props.onChange1,
    maxLength: maxLength1,
    disabled: disabled1,
    size: Math.max(maxLength1, 2)
  }), /*#__PURE__*/React.createElement("br", null), "R:\xA0", /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: min2,
    max: max2,
    value: props.value2,
    onChange: props.onChange2,
    disabled: disabled2
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: props.value2,
    onChange: props.onChange2,
    maxLength: maxLength2,
    disabled: disabled2,
    size: Math.max(maxLength2, 2)
  }), /*#__PURE__*/React.createElement("br", null), "U:\xA0", /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: min3,
    max: max3,
    value: props.value3,
    onChange: props.onChange3,
    disabled: disabled3
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: props.value3,
    onChange: props.onChange3,
    maxLength: maxLength3,
    disabled: disabled3,
    size: Math.max(maxLength3, 2)
  }), /*#__PURE__*/React.createElement("br", null), "D:\xA0", /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: min4,
    max: max4,
    value: props.value4,
    onChange: props.onChange4,
    disabled: disabled4
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: props.value4,
    onChange: props.onChange4,
    maxLength: maxLength4,
    disabled: disabled4,
    size: Math.max(maxLength4, 2)
  }));
}

/**
 * Create a 1-dimensional array of size 'length', where the 'i'th entry
 * is initialized to 'f(i)', or 'undefined' if 'f' is not passed.
 */
function array1d(length, f) {
  return Array.from({
    length: length
  }, f ? (v, i) => f(i) : undefined);
}

/**
 * Create a 2-dimensional array of size 'height' x 'width', where the 'i','j' entry
 * is initialized to 'f(i, j)', or 'undefined' if 'f' is not passed.
 */
function array2d(height, width, f) {
  return Array.from({
    length: height
  }, (v, i) => Array.from({
    length: width
  }, f ? (w, j) => f(i, j) : undefined));
}

/**
 * The classic convolution output size formula.
 *
 * The derivation for many special cases is worked out in:
 * http://deeplearning.net/software/theano/tutorial/conv_arithmetic.html
 */
function computeOutputSize(input_size, weight_size, padding, dilation, stride) {
  let output_size = {
    X: Math.floor((input_size.X + padding.L + padding.R - dilation.X * (weight_size.X - 1) - 1) / stride.X + 1),
    Y: Math.floor((input_size.Y + padding.U + padding.D - dilation.Y * (weight_size.Y - 1) - 1) / stride.Y + 1)
  };
  return output_size;
}

/**
 * Test if a set of parameters is valid.
 */
function paramsOK(input_size, weight_size, padding, dilation, stride) {
  let ret = computeOutputSize(input_size, weight_size, padding, dilation, stride);
  return ret.X > 0 && ret.Y > 0;
}

// We use the next two functions (maxWhile and minWhile) to
// inefficiently compute the bounds for various parameters
// given fixed values for other parameters.

/**
 * Given a predicate 'pred' and a starting integer 'start',
 * find the largest integer i >= start such that 'pred(i)'
 * is true OR end, whichever is smaller.
 */
function maxWhile(start, end, pred) {
  for (let i = start; i <= end; i++) {
    if (pred(i)) continue;
    return i - 1;
  }
  return end;
}

/**
 * Given a predicate 'pred' and a starting integer 'start',
 * find the smallest integer i <= start such that 'pred(i)'
 * is true OR end, whichever is larger.
 */
function minWhile(start, end, pred) {
  for (let i = start; i >= end; i--) {
    if (pred(i)) continue;
    return i + 1;
  }
  return end;
}

/**
 * Return the color at 0 <= p <= 1 for the RGB linear interpolation
 * between color (0) and white (1).
 */
function whiten(color, p) {
  return d3.interpolateRgb(color, "white")(p);
}

/**
 * Top-level component for the entire visualization.  This component
 * controls top level parameters like input sizes, but not the mouse
 * interaction with the actual visualized grids.
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input_size: {
        X: 5,
        Y: 5
      },
      weight_size: {
        X: 3,
        Y: 3
      },
      padding: {
        L: 0,
        R: 0,
        U: 0,
        D: 0
      },
      dilation: {
        X: 1,
        Y: 1
      },
      stride: {
        X: 1,
        Y: 1
      }
    };
  }

  // React controlled components clobber saved browser state, so
  // instead we manually save/load our state from localStorage.

  componentDidMount() {
    const state = localStorage.getItem("state");
    if (state) {
      this.setState(JSON.parse(state));
    }
  }
  componentDidUpdate() {
    localStorage.setItem("state", JSON.stringify(this.state));
  }
  render() {
    const input_size = this.state.input_size;
    const weight_size = this.state.weight_size;
    const padding = this.state.padding;
    const dilation = this.state.dilation;
    const stride = this.state.stride;
    const padded_input_size = {
      X: input_size.X + padding.L + padding.R,
      Y: input_size.Y + padding.U + padding.D
    };

    // TODO: transposed convolution

    const output_size = computeOutputSize(input_size, weight_size, padding, dilation, stride);

    // Compute the convolution symbolically.

    // output[output_height][output_width] =
    //    symbolic expression s for this cell, where
    //    s[kernel_height][kernel_width] =
    //      the flat input index multiplied against this kernel entry
    //      (undefined if this entry not used)
    //
    // Recall: the flat input index for (i, j) in a square matrix is 'i * size + j'
    const output = array2d(output_size.Y, output_size.X, (i, j) => array2d(weight_size.Y, weight_size.X));
    for (let h_out = 0; h_out < output_size.Y; h_out++) {
      for (let w_out = 0; w_out < output_size.X; w_out++) {
        for (let h_kern = 0; h_kern < weight_size.Y; h_kern++) {
          for (let w_kern = 0; w_kern < weight_size.X; w_kern++) {
            // NB: We purposely don't apply padding here, this is
            // handled at render time.
            const h_im = h_out * stride.Y + h_kern * dilation.Y;
            const w_im = w_out * stride.X + w_kern * dilation.X;
            output[h_out][w_out][h_kern][w_kern] = h_im * padded_input_size.X + w_im;
          }
        }
      }
    }

    // Make an extended params dictionary with our new computed values
    // to pass to the inner component.
    const params = Object.assign({
      padded_input_size: padded_input_size,
      output_size: output_size,
      output: output
    }, this.state);
    const onChange = state_key => {
      return e => {
        const r = parseInt(e.target.value, 10);
        // Text inputs can sometimes temporarily be in invalid states.
        // If it's not a valid number, refuse to set it.
        if (typeof r !== "undefined") {
          this.setState({
            [state_key]: r
          });
        }
      };
    };
    const onChangeInner = (state_key, state_inner_key) => {
      return e => {
        const r = parseInt(e.target.value, 10);
        // Text inputs can sometimes temporarily be in invalid states.
        // If it's not a valid number, refuse to set it.
        if (typeof r !== "undefined") {
          let tmpstate = JSON.parse(JSON.stringify(this.state));
          tmpstate[state_key][state_inner_key] = r;
          this.setState(tmpstate);
        }
      };
    };

    // An arbitrary constant I found aesthetically pleasing.
    const max_input_size = {
      X: 64,
      Y: 64
    };
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Convolution Visualizer"), /*#__PURE__*/React.createElement("div", {
      className: "author"
    }, "Edward Z. Yang"), /*#__PURE__*/React.createElement("p", null, "This interactive visualization demonstrates how various convolution parameters affect shapes and data dependencies between the input, weight and output matrices.  Hovering over an input/output will highlight the corresponding output/input, while hovering over an weight will highlight which inputs were multiplied into that weight to compute an output.  (Strictly speaking, the operation visualized here is a ", /*#__PURE__*/React.createElement("em", null, "correlation"), ", not a convolution, as a true convolution flips its weights before performing a correlation. However, most deep learning frameworks still call these convolutions, and in the end it's all the same to gradient descent.)"), /*#__PURE__*/React.createElement("form", {
      className: "form"
    }, /*#__PURE__*/React.createElement("fieldset", null, /*#__PURE__*/React.createElement("legend", null, "Input size:"), /*#__PURE__*/React.createElement(Sliders2, {
      min1: minWhile(max_input_size.X, 1, x => paramsOK({
        X: x,
        Y: input_size.Y
      }, weight_size, padding, dilation, stride)),
      max1: max_input_size.X,
      value1: input_size.X,
      onChange1: onChangeInner("input_size", "X"),
      min2: minWhile(max_input_size.Y, 1, x => paramsOK({
        X: input_size.X,
        Y: x
      }, weight_size, padding, dilation, stride)),
      max2: max_input_size.Y,
      value2: input_size.Y,
      onChange2: onChangeInner("input_size", "Y")
    })), /*#__PURE__*/React.createElement("fieldset", null, /*#__PURE__*/React.createElement("legend", null, "Kernel size:"), /*#__PURE__*/React.createElement(Sliders2, {
      min1: "1",
      max1: maxWhile(1, 100, x => paramsOK(input_size, {
        X: x,
        Y: weight_size.Y
      }, padding, dilation, stride)),
      value1: weight_size.X,
      onChange1: onChangeInner("weight_size", "X"),
      min2: "1",
      max2: maxWhile(1, 100, x => paramsOK(input_size, {
        X: weight_size.X,
        Y: x
      }, padding, dilation, stride)),
      value2: weight_size.Y,
      onChange2: onChangeInner("weight_size", "Y")
    })), /*#__PURE__*/React.createElement("fieldset", null, /*#__PURE__*/React.createElement("legend", null, "Padding:"), /*#__PURE__*/React.createElement(Sliders4, {
      min1: minWhile(dilation.X * (weight_size.X - 1), 0, x => paramsOK(input_size, weight_size, {
        L: x,
        R: padding.R,
        U: padding.U,
        D: padding.D
      }, dilation, stride)),
      max1: Math.max(dilation.X * (weight_size.X - 1), dilation.X * (weight_size.X - 1)),
      value1: padding.L,
      onChange1: onChangeInner("padding", "L"),
      min2: minWhile(dilation.X * (weight_size.X - 1), 0, x => paramsOK(input_size, weight_size, {
        L: padding.L,
        R: x,
        U: padding.U,
        D: padding.D
      }, dilation, stride)),
      max2: Math.max(dilation.X * (weight_size.X - 1), dilation.X * (weight_size.X - 1)),
      value2: padding.R,
      onChange2: onChangeInner("padding", "R"),
      min3: minWhile(dilation.Y * (weight_size.Y - 1), 0, x => paramsOK(input_size, weight_size, {
        L: padding.L,
        R: padding.R,
        U: x,
        D: padding.D
      }, dilation, stride)),
      max3: Math.max(dilation.Y * (weight_size.Y - 1), dilation.Y * (weight_size.Y - 1)),
      value3: padding.U,
      onChange3: onChangeInner("padding", "U"),
      min4: minWhile(dilation.Y * (weight_size.Y - 1), 0, x => paramsOK(input_size, weight_size, {
        L: padding.L,
        R: padding.R,
        U: padding.U,
        D: x
      }, dilation, stride)),
      max4: Math.max(dilation.Y * (weight_size.Y - 1), dilation.Y * (weight_size.Y - 1)),
      value4: padding.D,
      onChange4: onChangeInner("padding", "D")
    })), /*#__PURE__*/React.createElement("fieldset", null, /*#__PURE__*/React.createElement("legend", null, "Dilation:"), /*#__PURE__*/React.createElement(Sliders2, {
      min1: "1",
      max1: maxWhile(1, 100, x => paramsOK(input_size, weight_size, padding, {
        X: x,
        Y: dilation.Y
      }, stride)),
      value1: dilation.X,
      onChange1: onChangeInner("dilation", "X"),
      disabled1: weight_size.X === 1,
      min2: "1",
      max2: maxWhile(1, 100, x => paramsOK(input_size, weight_size, padding, {
        X: dilation.X,
        Y: x
      }, stride)),
      value2: dilation.Y,
      onChange2: onChangeInner("dilation", "Y"),
      disabled2: weight_size.Y === 1
    })), /*#__PURE__*/React.createElement("fieldset", null, /*#__PURE__*/React.createElement("legend", null, "Stride:"), /*#__PURE__*/React.createElement(Sliders2, {
      min1: "1",
      max1: Math.max(input_size.X - dilation.X * (weight_size.X - 1), 1),
      value1: stride.X,
      onChange1: onChangeInner("stride", "X"),
      min2: "1",
      max2: Math.max(input_size.Y - dilation.Y * (weight_size.Y - 1), 1),
      value2: stride.Y,
      onChange2: onChangeInner("stride", "Y")
    }))), /*#__PURE__*/React.createElement(Viewport, params));
  }
}

/**
 * The viewport into the actual meat of the visualization, the
 * matrices.  This component controls the state for hovering
 * and the animation.
 */
class Viewport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Which matrix are we hovering over?
      hoverOver: undefined,
      // Which coordinate are we hovering over?  Origin
      // is the top-left corner.
      hoverH: undefined,
      hoverW: undefined,
      // What is our animation timestep?  A monotonically
      // increasing integer.
      counter: 0
    };
  }

  // Arrange for counter to increment by one after a fixed
  // time interval:

  tick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000); // 1 second
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const input_size = this.props.input_size;
    const padded_input_size = this.props.padded_input_size;
    const weight_size = this.props.weight_size;
    const output_size = this.props.output_size;
    const output = this.props.output;
    const padding = this.props.padding;
    const stride = this.props.stride;
    let hoverOver = this.state.hoverOver;
    let hoverH = this.state.hoverH;
    let hoverW = this.state.hoverW;

    // The primary heavy lifting of the render() function is to
    // define colorizer functions for each matrix, such that
    //
    //    colorizer(i, j) = color of the cell at i, j
    //
    let inputColorizer = undefined;
    let weightColorizer = undefined;
    let outputColorizer = undefined;

    // After colorizing an input cell, apply darkening if the cell falls
    // within the padding.  This function is responsible for rendering
    // the dark padding border; if you replace this with a passthrough
    // to f no dark padding border will be rendered.
    function inputColorizerWrapper(f) {
      return (i, j) => {
        let r = f(i, j);
        if (typeof r === "undefined") {
          r = d3.color("white");
        } else {
          r = d3.color(r);
        }
        if (i < padding.U || i >= input_size.Y + padding.U || j < padding.L || j >= input_size.X + padding.L) {
          r = r.darker(2.5);
        }
        return r;
      };
    }

    // Given the animation timestep, determine the output coordinates
    // of our animated stencil.
    const flat_animated = this.state.counter % (output_size.X * output_size.Y);
    const animatedH = Math.floor(flat_animated / output_size.X);
    const animatedW = flat_animated % output_size.X;

    // If the user is not hovering over any matrix, render "as if"
    // they were hovering over the animated output coordinate.
    if (!hoverOver) {
      hoverOver = "output";
      hoverH = animatedH;
      hoverW = animatedW;
    }

    // If the user is hovering over the input matrix, render "as if'
    // they were hovering over the output coordinate, such that the
    // top-left corner of the stencil is attached to the cursor.
    if (hoverOver === "input") {
      hoverOver = "output";
      hoverH = Math.min(Math.floor(hoverH / stride.Y), output_size.Y - 1);
      hoverW = Math.min(Math.floor(hoverW / stride.X), output_size.X - 1);
    }

    // Generate the color interpolator for generating the kernels.
    // This particular scale was found via experimentation with various
    // start/endpoints and different interpolation schemes.  For more
    // documentation on these D3 functions, see:
    //
    //  - https://github.com/d3/d3-interpolate
    //  - https://github.com/d3/d3-color
    //
    // Some notes on what I was going for, from an aesthetic perspective:
    //
    //  - The most important constraint is that all colors produced by the
    //    interpolator need to be saturated enough so they are not confused
    //    with the "animation" shadow.
    //  - I wanted the interpolation to be smooth, despite this being a
    //    discrete setting where an ordinal color scheme could be
    //    employed.  (Also I couldn't get the color schemes to work lol.)
    //
    // If you are a visualization expert and have a pet 2D color
    // interpolation scheme, please try swapping it in here and seeing
    // how it goes.
    const scale_size = weight_size;
    const xScale = d3.scaleSequential(d3.interpolateLab('#d7191c', '#2c7bb6')).domain([-1, scale_size.X]);
    const yScale = d3.scaleSequential(d3.interpolateLab('#d7191c', d3.color('#1a9641').brighter(1))).domain([-1, scale_size.Y]);
    function xyScale(i, j) {
      return d3.color(d3.interpolateLab(xScale(i), yScale(j))((j - i) / (Math.max(scale_size.X, scale_size.Y) - 1)));
    }

    // Given an output coordinate 'hoverH, hoverW', compute a mapping
    // from inputs to the weight coordinates which multiplied with
    // that input.
    //
    // Result:
    //    r[input_height][input_width] = [weight_height, weight_width]
    function compute_input_multiplies_with_weight(hoverH, hoverW) {
      const input_multiplies_with_weight = array1d(padded_input_size.X * padded_input_size.Y);
      for (let h_weight = 0; h_weight < weight_size.Y; h_weight++) {
        for (let w_weight = 0; w_weight < weight_size.X; w_weight++) {
          const flat_input = output[hoverH][hoverW][h_weight][w_weight];
          if (typeof flat_input === "undefined") continue;
          input_multiplies_with_weight[flat_input] = [h_weight, w_weight];
        }
      }
      return input_multiplies_with_weight;
    }

    // The user is hovering over the output matrix (or the input matrix)
    if (hoverOver === "output") {
      outputColorizer = (i, j) => {
        const base = d3.color('#666');
        // If this output is selected, display it as dark grey
        if (hoverH === i && hoverW === j) {
          return base;
        }

        // Otherwise, if the output is animated, display it as a lighter
        // gray
        if (animatedH === i && animatedW === j) {
          return whiten(base, 0.8);
        }
      };
      const input_multiplies_with_weight = compute_input_multiplies_with_weight(hoverH, hoverW);
      const animated_input_multiplies_with_weight = compute_input_multiplies_with_weight(animatedH, animatedW);
      inputColorizer = inputColorizerWrapper((i, j) => {
        // If this input was used to compute the selected output, render
        // it the same color as the corresponding entry in the weight
        // matrix which it was multiplied against.
        const r = input_multiplies_with_weight[i * padded_input_size.X + j];
        if (r) {
          return xyScale(r[0], r[1]);
        }

        // Otherwise, if the input was used to compute the animated
        // output, render it as a lighter version of the weight color it was
        // multiplied against.
        const s = animated_input_multiplies_with_weight[i * padded_input_size.X + j];
        if (s) {
          return whiten(xyScale(s[0], s[1]), 0.8);
        }
      });

      // The weight matrix displays the full 2D color scale
      weightColorizer = (i, j) => {
        return xyScale(i, j);
      };

      // The user is hovering over the weight matrix
    } else if (hoverOver === "weight") {
      weightColorizer = (i, j) => {
        // If this weight is selected, render its color
        if (hoverH === i && hoverW === j) {
          return xyScale(hoverH, hoverW);
        }
      };

      // Compute a mapping from flat input index to output coordinates which
      // this input multiplied with the selected weight to produce.
      const input_produces_output = array1d(padded_input_size.X * padded_input_size.Y);
      for (let h_out = 0; h_out < output_size.Y; h_out++) {
        for (let w_out = 0; w_out < output_size.X; w_out++) {
          const flat_input = output[h_out][w_out][hoverH][hoverW];
          if (typeof flat_input === "undefined") continue;
          input_produces_output[flat_input] = [h_out, w_out];
        }
      }
      const animated_input_multiplies_with_weight = compute_input_multiplies_with_weight(animatedH, animatedW);
      inputColorizer = inputColorizerWrapper((i, j) => {
        // We are only rendering inputs which multiplied against a given
        // weight, so render all inputs the same color as the selected
        // weight.
        const color = xyScale(hoverH, hoverW);

        // If this input cell was multiplied by the selected weight to
        // produce the animated output, darken it.  This shows the
        // current animation step's "contribution" to the colored
        // inputs.
        const s = animated_input_multiplies_with_weight[i * padded_input_size.X + j];
        if (s) {
          if (s[0] === hoverH && s[1] === hoverW) {
            return color.darker(1);
          }
        }

        // If this input cell was multiplied by the selected weight to
        // produce *some* output, render it as the weight's color.
        const r = input_produces_output[i * padded_input_size.X + j];
        if (r) {
          // BUT, if the input cell is part of the current animation
          // stencil, lighten it so that we can still see the stencil.
          if (s) {
            return whiten(color, 0.2);
          }
          return color;
        }

        // If this input cell is part of the animated stencil (and
        // it is not part of the solid block of color), render a shadow
        // of the stencil so we can still see it.
        if (s) {
          return whiten(xyScale(s[0], s[1]), 0.8);
        }
      });

      // The output matrix is a solid color of the selected weight.
      outputColorizer = (i, j) => {
        const color = xyScale(hoverH, hoverW);
        // If the output is the animated one, darken it, so we can
        // see the animation.
        if (i === animatedH && j === animatedW) {
          return color.darker(1);
        }
        return color;
      };
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "viewport"
    }, /*#__PURE__*/React.createElement("div", {
      className: "grid-container"
    }, "Input (", input_size.X, " \xD7 ", input_size.Y, "):", /*#__PURE__*/React.createElement(Grid, {
      size: {
        X: input_size.X + padding.L + padding.R,
        Y: input_size.Y + padding.U + padding.D
      },
      colorizer: inputColorizer,
      onMouseEnter: (e, i, j) => {
        this.setState({
          hoverOver: "input",
          hoverH: i,
          hoverW: j
        });
      },
      onMouseLeave: (e, i, j) => {
        this.setState({
          hoverOver: undefined,
          hoverH: undefined,
          hoverW: undefined
        });
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "grid-container"
    }, "Weight (", weight_size.X, " \xD7 ", weight_size.Y, "):", /*#__PURE__*/React.createElement(Grid, {
      size: weight_size,
      colorizer: weightColorizer,
      onMouseEnter: (e, i, j) => {
        this.setState({
          hoverOver: "weight",
          hoverH: i,
          hoverW: j
        });
      },
      onMouseLeave: (e, i, j) => {
        this.setState({
          hoverOver: undefined,
          hoverH: undefined,
          hoverW: undefined
        });
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "grid-container"
    }, "Output (", output_size.X, " \xD7 ", output_size.Y, "):", /*#__PURE__*/React.createElement(Grid, {
      size: output_size,
      colorizer: outputColorizer,
      onMouseEnter: (e, i, j) => {
        this.setState({
          hoverOver: "output",
          hoverH: i,
          hoverW: j
        });
      },
      onMouseLeave: (e, i, j) => {
        this.setState({
          hoverOver: undefined,
          hoverH: undefined,
          hoverW: undefined
        });
      }
    })));
  }
}

/**
 * A square matrix grid which we render our matrix animations.
 *
 * Properties:
 *    - size: The height/width of the matrix
 *    - colorizer: A function f(i, j), returning the color of the i,j cell
 *    - onMouseEnter: A callback invoked f(event, i, j) when the i,j cell is
 *                    entered by a mouse.
 *    - onMouseLeave: A callback invoked f(event, i, j) when the i,j cell is
 *                    left by a mouse.
 */
function Grid(props) {
  const size = {
    X: parseInt(props.size.X, 10),
    Y: parseInt(props.size.Y, 10)
  };
  const grid = array2d(size.Y, size.X);
  const xgrid = grid.map((row, i) => {
    const xrow = row.map((e, j) => {
      // Use of colorizer this way means we force recompute of all tiles
      const color = props.colorizer ? props.colorizer(i, j) : undefined;
      return /*#__PURE__*/React.createElement("td", {
        key: j,
        style: {
          backgroundColor: color
        },
        onMouseEnter: props.onMouseEnter ? e => props.onMouseEnter(e, i, j) : undefined,
        onMouseLeave: props.onMouseLeave ? e => props.onMouseLeave(e, i, j) : undefined
      });
    });
    return /*#__PURE__*/React.createElement("tr", {
      key: i
    }, xrow);
  });
  return /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("tbody", null, xgrid));
}

// ========================================

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));