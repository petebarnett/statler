/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var envoy_api_v2_core_address_pb = require('../../../envoy/api/v2/core/address_pb.js');
goog.object.extend(proto, envoy_api_v2_core_address_pb);
var envoy_api_v2_core_base_pb = require('../../../envoy/api/v2/core/base_pb.js');
goog.object.extend(proto, envoy_api_v2_core_base_pb);
var envoy_api_v2_discovery_pb = require('../../../envoy/api/v2/discovery_pb.js');
goog.object.extend(proto, envoy_api_v2_discovery_pb);
var envoy_api_v2_listener_listener_pb = require('../../../envoy/api/v2/listener/listener_pb.js');
goog.object.extend(proto, envoy_api_v2_listener_listener_pb);
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var validate_validate_pb = require('../../../validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
goog.exportSymbol('proto.envoy.api.v2.Listener', null, global);
goog.exportSymbol('proto.envoy.api.v2.Listener.DeprecatedV1', null, global);
goog.exportSymbol('proto.envoy.api.v2.Listener.DrainType', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.envoy.api.v2.Listener = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.api.v2.Listener.repeatedFields_, null);
};
goog.inherits(proto.envoy.api.v2.Listener, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.api.v2.Listener.displayName = 'proto.envoy.api.v2.Listener';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.api.v2.Listener.repeatedFields_ = [3,9,13];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.api.v2.Listener.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.Listener.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.Listener} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.Listener.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    address: (f = msg.getAddress()) && envoy_api_v2_core_address_pb.Address.toObject(includeInstance, f),
    filterChainsList: jspb.Message.toObjectList(msg.getFilterChainsList(),
    envoy_api_v2_listener_listener_pb.FilterChain.toObject, includeInstance),
    useOriginalDst: (f = msg.getUseOriginalDst()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    perConnectionBufferLimitBytes: (f = msg.getPerConnectionBufferLimitBytes()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f),
    metadata: (f = msg.getMetadata()) && envoy_api_v2_core_base_pb.Metadata.toObject(includeInstance, f),
    deprecatedV1: (f = msg.getDeprecatedV1()) && proto.envoy.api.v2.Listener.DeprecatedV1.toObject(includeInstance, f),
    drainType: jspb.Message.getFieldWithDefault(msg, 8, 0),
    listenerFiltersList: jspb.Message.toObjectList(msg.getListenerFiltersList(),
    envoy_api_v2_listener_listener_pb.ListenerFilter.toObject, includeInstance),
    listenerFiltersTimeout: (f = msg.getListenerFiltersTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    transparent: (f = msg.getTransparent()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    freebind: (f = msg.getFreebind()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    socketOptionsList: jspb.Message.toObjectList(msg.getSocketOptionsList(),
    envoy_api_v2_core_base_pb.SocketOption.toObject, includeInstance),
    tcpFastOpenQueueLength: (f = msg.getTcpFastOpenQueueLength()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f),
    bugfixReverseWriteFilterOrder: (f = msg.getBugfixReverseWriteFilterOrder()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.envoy.api.v2.Listener}
 */
proto.envoy.api.v2.Listener.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.Listener;
  return proto.envoy.api.v2.Listener.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.Listener} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.Listener}
 */
proto.envoy.api.v2.Listener.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new envoy_api_v2_core_address_pb.Address;
      reader.readMessage(value,envoy_api_v2_core_address_pb.Address.deserializeBinaryFromReader);
      msg.setAddress(value);
      break;
    case 3:
      var value = new envoy_api_v2_listener_listener_pb.FilterChain;
      reader.readMessage(value,envoy_api_v2_listener_listener_pb.FilterChain.deserializeBinaryFromReader);
      msg.addFilterChains(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setUseOriginalDst(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setPerConnectionBufferLimitBytes(value);
      break;
    case 6:
      var value = new envoy_api_v2_core_base_pb.Metadata;
      reader.readMessage(value,envoy_api_v2_core_base_pb.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 7:
      var value = new proto.envoy.api.v2.Listener.DeprecatedV1;
      reader.readMessage(value,proto.envoy.api.v2.Listener.DeprecatedV1.deserializeBinaryFromReader);
      msg.setDeprecatedV1(value);
      break;
    case 8:
      var value = /** @type {!proto.envoy.api.v2.Listener.DrainType} */ (reader.readEnum());
      msg.setDrainType(value);
      break;
    case 9:
      var value = new envoy_api_v2_listener_listener_pb.ListenerFilter;
      reader.readMessage(value,envoy_api_v2_listener_listener_pb.ListenerFilter.deserializeBinaryFromReader);
      msg.addListenerFilters(value);
      break;
    case 15:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setListenerFiltersTimeout(value);
      break;
    case 10:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setTransparent(value);
      break;
    case 11:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setFreebind(value);
      break;
    case 13:
      var value = new envoy_api_v2_core_base_pb.SocketOption;
      reader.readMessage(value,envoy_api_v2_core_base_pb.SocketOption.deserializeBinaryFromReader);
      msg.addSocketOptions(value);
      break;
    case 12:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setTcpFastOpenQueueLength(value);
      break;
    case 14:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setBugfixReverseWriteFilterOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.envoy.api.v2.Listener.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.Listener.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.Listener} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.Listener.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAddress();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      envoy_api_v2_core_address_pb.Address.serializeBinaryToWriter
    );
  }
  f = message.getFilterChainsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      envoy_api_v2_listener_listener_pb.FilterChain.serializeBinaryToWriter
    );
  }
  f = message.getUseOriginalDst();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getPerConnectionBufferLimitBytes();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      envoy_api_v2_core_base_pb.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getDeprecatedV1();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.envoy.api.v2.Listener.DeprecatedV1.serializeBinaryToWriter
    );
  }
  f = message.getDrainType();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getListenerFiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      envoy_api_v2_listener_listener_pb.ListenerFilter.serializeBinaryToWriter
    );
  }
  f = message.getListenerFiltersTimeout();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getTransparent();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getFreebind();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getSocketOptionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      envoy_api_v2_core_base_pb.SocketOption.serializeBinaryToWriter
    );
  }
  f = message.getTcpFastOpenQueueLength();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
  f = message.getBugfixReverseWriteFilterOrder();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.envoy.api.v2.Listener.DrainType = {
  DEFAULT: 0,
  MODIFY_ONLY: 1
};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.envoy.api.v2.Listener.DeprecatedV1 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.Listener.DeprecatedV1, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.api.v2.Listener.DeprecatedV1.displayName = 'proto.envoy.api.v2.Listener.DeprecatedV1';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.api.v2.Listener.DeprecatedV1.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.Listener.DeprecatedV1.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.Listener.DeprecatedV1} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.Listener.DeprecatedV1.toObject = function(includeInstance, msg) {
  var f, obj = {
    bindToPort: (f = msg.getBindToPort()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.envoy.api.v2.Listener.DeprecatedV1}
 */
proto.envoy.api.v2.Listener.DeprecatedV1.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.Listener.DeprecatedV1;
  return proto.envoy.api.v2.Listener.DeprecatedV1.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.Listener.DeprecatedV1} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.Listener.DeprecatedV1}
 */
proto.envoy.api.v2.Listener.DeprecatedV1.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setBindToPort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.envoy.api.v2.Listener.DeprecatedV1.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.Listener.DeprecatedV1.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.Listener.DeprecatedV1} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.Listener.DeprecatedV1.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBindToPort();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.BoolValue bind_to_port = 1;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.envoy.api.v2.Listener.DeprecatedV1.prototype.getBindToPort = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 1));
};


/** @param {?proto.google.protobuf.BoolValue|undefined} value */
proto.envoy.api.v2.Listener.DeprecatedV1.prototype.setBindToPort = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.envoy.api.v2.Listener.DeprecatedV1.prototype.clearBindToPort = function() {
  this.setBindToPort(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Listener.DeprecatedV1.prototype.hasBindToPort = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.envoy.api.v2.Listener.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.envoy.api.v2.Listener.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional core.Address address = 2;
 * @return {?proto.envoy.api.v2.core.Address}
 */
proto.envoy.api.v2.Listener.prototype.getAddress = function() {
  return /** @type{?proto.envoy.api.v2.core.Address} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_address_pb.Address, 2));
};


/** @param {?proto.envoy.api.v2.core.Address|undefined} value */
proto.envoy.api.v2.Listener.prototype.setAddress = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.envoy.api.v2.Listener.prototype.clearAddress = function() {
  this.setAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Listener.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated listener.FilterChain filter_chains = 3;
 * @return {!Array<!proto.envoy.api.v2.listener.FilterChain>}
 */
proto.envoy.api.v2.Listener.prototype.getFilterChainsList = function() {
  return /** @type{!Array<!proto.envoy.api.v2.listener.FilterChain>} */ (
    jspb.Message.getRepeatedWrapperField(this, envoy_api_v2_listener_listener_pb.FilterChain, 3));
};


/** @param {!Array<!proto.envoy.api.v2.listener.FilterChain>} value */
proto.envoy.api.v2.Listener.prototype.setFilterChainsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.envoy.api.v2.listener.FilterChain=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.listener.FilterChain}
 */
proto.envoy.api.v2.Listener.prototype.addFilterChains = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.envoy.api.v2.listener.FilterChain, opt_index);
};


proto.envoy.api.v2.Listener.prototype.clearFilterChainsList = function() {
  this.setFilterChainsList([]);
};


/**
 * optional google.protobuf.BoolValue use_original_dst = 4;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.envoy.api.v2.Listener.prototype.getUseOriginalDst = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 4));
};


/** @param {?proto.google.protobuf.BoolValue|undefined} value */
proto.envoy.api.v2.Listener.prototype.setUseOriginalDst = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.envoy.api.v2.Listener.prototype.clearUseOriginalDst = function() {
  this.setUseOriginalDst(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Listener.prototype.hasUseOriginalDst = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.UInt32Value per_connection_buffer_limit_bytes = 5;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.envoy.api.v2.Listener.prototype.getPerConnectionBufferLimitBytes = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 5));
};


/** @param {?proto.google.protobuf.UInt32Value|undefined} value */
proto.envoy.api.v2.Listener.prototype.setPerConnectionBufferLimitBytes = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.envoy.api.v2.Listener.prototype.clearPerConnectionBufferLimitBytes = function() {
  this.setPerConnectionBufferLimitBytes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Listener.prototype.hasPerConnectionBufferLimitBytes = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional core.Metadata metadata = 6;
 * @return {?proto.envoy.api.v2.core.Metadata}
 */
proto.envoy.api.v2.Listener.prototype.getMetadata = function() {
  return /** @type{?proto.envoy.api.v2.core.Metadata} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_base_pb.Metadata, 6));
};


/** @param {?proto.envoy.api.v2.core.Metadata|undefined} value */
proto.envoy.api.v2.Listener.prototype.setMetadata = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.envoy.api.v2.Listener.prototype.clearMetadata = function() {
  this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Listener.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional DeprecatedV1 deprecated_v1 = 7;
 * @return {?proto.envoy.api.v2.Listener.DeprecatedV1}
 */
proto.envoy.api.v2.Listener.prototype.getDeprecatedV1 = function() {
  return /** @type{?proto.envoy.api.v2.Listener.DeprecatedV1} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.Listener.DeprecatedV1, 7));
};


/** @param {?proto.envoy.api.v2.Listener.DeprecatedV1|undefined} value */
proto.envoy.api.v2.Listener.prototype.setDeprecatedV1 = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.envoy.api.v2.Listener.prototype.clearDeprecatedV1 = function() {
  this.setDeprecatedV1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Listener.prototype.hasDeprecatedV1 = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional DrainType drain_type = 8;
 * @return {!proto.envoy.api.v2.Listener.DrainType}
 */
proto.envoy.api.v2.Listener.prototype.getDrainType = function() {
  return /** @type {!proto.envoy.api.v2.Listener.DrainType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {!proto.envoy.api.v2.Listener.DrainType} value */
proto.envoy.api.v2.Listener.prototype.setDrainType = function(value) {
  jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * repeated listener.ListenerFilter listener_filters = 9;
 * @return {!Array<!proto.envoy.api.v2.listener.ListenerFilter>}
 */
proto.envoy.api.v2.Listener.prototype.getListenerFiltersList = function() {
  return /** @type{!Array<!proto.envoy.api.v2.listener.ListenerFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, envoy_api_v2_listener_listener_pb.ListenerFilter, 9));
};


/** @param {!Array<!proto.envoy.api.v2.listener.ListenerFilter>} value */
proto.envoy.api.v2.Listener.prototype.setListenerFiltersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.envoy.api.v2.listener.ListenerFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.listener.ListenerFilter}
 */
proto.envoy.api.v2.Listener.prototype.addListenerFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.envoy.api.v2.listener.ListenerFilter, opt_index);
};


proto.envoy.api.v2.Listener.prototype.clearListenerFiltersList = function() {
  this.setListenerFiltersList([]);
};


/**
 * optional google.protobuf.Duration listener_filters_timeout = 15;
 * @return {?proto.google.protobuf.Duration}
 */
proto.envoy.api.v2.Listener.prototype.getListenerFiltersTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 15));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.envoy.api.v2.Listener.prototype.setListenerFiltersTimeout = function(value) {
  jspb.Message.setWrapperField(this, 15, value);
};


proto.envoy.api.v2.Listener.prototype.clearListenerFiltersTimeout = function() {
  this.setListenerFiltersTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Listener.prototype.hasListenerFiltersTimeout = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional google.protobuf.BoolValue transparent = 10;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.envoy.api.v2.Listener.prototype.getTransparent = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 10));
};


/** @param {?proto.google.protobuf.BoolValue|undefined} value */
proto.envoy.api.v2.Listener.prototype.setTransparent = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


proto.envoy.api.v2.Listener.prototype.clearTransparent = function() {
  this.setTransparent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Listener.prototype.hasTransparent = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.BoolValue freebind = 11;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.envoy.api.v2.Listener.prototype.getFreebind = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 11));
};


/** @param {?proto.google.protobuf.BoolValue|undefined} value */
proto.envoy.api.v2.Listener.prototype.setFreebind = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


proto.envoy.api.v2.Listener.prototype.clearFreebind = function() {
  this.setFreebind(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Listener.prototype.hasFreebind = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated core.SocketOption socket_options = 13;
 * @return {!Array<!proto.envoy.api.v2.core.SocketOption>}
 */
proto.envoy.api.v2.Listener.prototype.getSocketOptionsList = function() {
  return /** @type{!Array<!proto.envoy.api.v2.core.SocketOption>} */ (
    jspb.Message.getRepeatedWrapperField(this, envoy_api_v2_core_base_pb.SocketOption, 13));
};


/** @param {!Array<!proto.envoy.api.v2.core.SocketOption>} value */
proto.envoy.api.v2.Listener.prototype.setSocketOptionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.envoy.api.v2.core.SocketOption=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.core.SocketOption}
 */
proto.envoy.api.v2.Listener.prototype.addSocketOptions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.envoy.api.v2.core.SocketOption, opt_index);
};


proto.envoy.api.v2.Listener.prototype.clearSocketOptionsList = function() {
  this.setSocketOptionsList([]);
};


/**
 * optional google.protobuf.UInt32Value tcp_fast_open_queue_length = 12;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.envoy.api.v2.Listener.prototype.getTcpFastOpenQueueLength = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 12));
};


/** @param {?proto.google.protobuf.UInt32Value|undefined} value */
proto.envoy.api.v2.Listener.prototype.setTcpFastOpenQueueLength = function(value) {
  jspb.Message.setWrapperField(this, 12, value);
};


proto.envoy.api.v2.Listener.prototype.clearTcpFastOpenQueueLength = function() {
  this.setTcpFastOpenQueueLength(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Listener.prototype.hasTcpFastOpenQueueLength = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional google.protobuf.BoolValue bugfix_reverse_write_filter_order = 14;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.envoy.api.v2.Listener.prototype.getBugfixReverseWriteFilterOrder = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 14));
};


/** @param {?proto.google.protobuf.BoolValue|undefined} value */
proto.envoy.api.v2.Listener.prototype.setBugfixReverseWriteFilterOrder = function(value) {
  jspb.Message.setWrapperField(this, 14, value);
};


proto.envoy.api.v2.Listener.prototype.clearBugfixReverseWriteFilterOrder = function() {
  this.setBugfixReverseWriteFilterOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Listener.prototype.hasBugfixReverseWriteFilterOrder = function() {
  return jspb.Message.getField(this, 14) != null;
};


goog.object.extend(exports, proto.envoy.api.v2);
