Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/Users/jiangguisheng/Documents/RNTestProjects/esparclientRN/js/pages/home/DiaryList.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _Config=require('../../utils/Config');var _Utils=require('../../utils/Utils');var _RefreshFlatList=require('../../utils/RefreshFlatList');var _RefreshFlatList2=_interopRequireDefault(_RefreshFlatList);var _FlatListExample=require('../../utils/FlatListExample');var _FlatListExample2=_interopRequireDefault(_FlatListExample);var _Com=require('../../utils/Com');var _Com2=_interopRequireDefault(_Com);var _reactNativeRefreshableFlatlist=require('react-native-refreshable-flatlist');var _reactNativeRefreshableFlatlist2=_interopRequireDefault(_reactNativeRefreshableFlatlist);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var index=0;var number=10;var list=void 0;var DiaryList=function(_Component){_inherits(DiaryList,_Component);function DiaryList(props){_classCallCheck(this,DiaryList);var _this=_possibleConstructorReturn(this,(DiaryList.__proto__||Object.getPrototypeOf(DiaryList)).call(this,props));_this._renderItem=function(item){return _react2.default.createElement(_reactNative.View,{style:styles.item,__source:{fileName:_jsxFileName,lineNumber:77}},_react2.default.createElement(_reactNative.View,{style:styles.itemTopView,__source:{fileName:_jsxFileName,lineNumber:78}},_react2.default.createElement(_reactNative.Image,{source:{uri:_Config.image_ip+item.item.HeadPortrait},defaultSource:require('../../../images/默认头像.png'),style:styles.itemTopViewImage,__source:{fileName:_jsxFileName,lineNumber:79}}),_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:80}},item.item.EmployeeName)),_react2.default.createElement(_reactNative.View,{style:{alignItems:'center'},__source:{fileName:_jsxFileName,lineNumber:82}},_react2.default.createElement(_reactNative.Image,{style:styles.itemImage,source:{uri:_Config.image_ip+item.item.imageUrl},__source:{fileName:_jsxFileName,lineNumber:83}})),_react2.default.createElement(_reactNative.View,{style:{height:40,alignItems:'center',justifyContent:'center'},__source:{fileName:_jsxFileName,lineNumber:85}},_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:86}},item.item.Title)));};_this._onRefresh=function(){_this.setState({isRefreshing:true,showFoot:1});index=0;_this.requestData();};_this.state={data:[],isLoading:false,isRefreshing:false,showFoot:0};return _this;}_createClass(DiaryList,[{key:'requestData',value:function requestData(){var _this2=this;var url=_Config.base_url+'/queryDiary.do?index='+index+'&size='+number;fetch(url,{method:'GET'}).then(function(response){return response.json();}).then(function(responseJson){if(Boolean(responseJson.success)){list=responseJson.data;if(index==0){_this2.setState({data:list,showFoot:0});}else{_this2.setState({data:_this2.state.data.concat(list)});}_this2.setState({isRefreshing:false,isLoading:false});if(list.length<number){_this2.setState({showFoot:3});}list=null;}}).catch(function(error){return alert('接口:'+url+'错误'+error.description);}).done();}},{key:'componentDidMount',value:function componentDidMount(){this.requestData();}},{key:'_onEndReached',value:function _onEndReached(){this.setState({isLoading:true,showFoot:2});index++;this.requestData();console.log('');}},{key:'render',value:function render(){return _react2.default.createElement(_reactNative.SafeAreaView,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:112}},_react2.default.createElement(_RefreshFlatList2.default,{data:this.state.data,renderItem:this._renderItem,refreshState:this.state.showFoot,onEndReached:this._onEndReached.bind(this),__source:{fileName:_jsxFileName,lineNumber:113}}));}}]);return DiaryList;}(_react.Component);DiaryList.navigationOptions=function(_ref){var navigation=_ref.navigation,screenProps=_ref.screenProps;return{headerTitle:'日记'};};exports.default=DiaryList;var styles=_reactNative.StyleSheet.create({container:{flex:1,height:(0,_Utils.screenHeight)(),backgroundColor:'white'},item:{flex:1,marginLeft:10,marginRight:10,marginTop:5,marginBottom:5,borderRadius:5,overflow:'hidden',backgroundColor:'white'},itemTopView:{flexDirection:'row',alignItems:'center',marginBottom:10,marginTop:10,marginLeft:10},itemTopViewImage:{width:30,height:30,overflow:'hidden',borderRadius:15,marginRight:7},itemTopViewText:{height:30,width:100,color:'#333',fontSize:15},itemImage:{width:(0,_Utils.screenWidth)()-20,height:130},itemTitle:{color:'black',fontSize:20,textAlign:'center'}});

//# sourceMappingURL=DiaryList-compiled.js.map