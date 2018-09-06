var _jsxFileName='/Users/jiangguisheng/Documents/RNTestProjects/esparclientRN/index.js';var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _reactNavigation=require('react-navigation');var _Assistant=require('./js/pages/assistant/Assistant');var _Assistant2=_interopRequireDefault(_Assistant);var _Experience=require('./js/pages/experience/Experience');var _Experience2=_interopRequireDefault(_Experience);var _Wallet=require('./js/pages/wallet/Wallet');var _Wallet2=_interopRequireDefault(_Wallet);var _Person=require('./js/pages/person/Person');var _Person2=_interopRequireDefault(_Person);var _Home=require('./js/pages/home/Home');var _Home2=_interopRequireDefault(_Home);var _BrandClinicInfo=require('./js/pages/home/BrandClinicInfo');var _BrandClinicInfo2=_interopRequireDefault(_BrandClinicInfo);var _Login=require('./js/pages/home/Login');var _Login2=_interopRequireDefault(_Login);var _DiaryList=require('./js/pages/home/DiaryList');var _DiaryList2=_interopRequireDefault(_DiaryList);var _DaRenList=require('./js/pages/home/DaRenList');var _DaRenList2=_interopRequireDefault(_DaRenList);var _QuickReserve=require('./js/pages/home/QuickReserve');var _QuickReserve2=_interopRequireDefault(_QuickReserve);var _SelectClick=require('./js/pages/home/SelectClick');var _SelectClick2=_interopRequireDefault(_SelectClick);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_reactNative.YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated','Module RCTImageLoader']);var MainScreentNavigator=(0,_reactNavigation.TabNavigator)({home:{screen:_Home2.default,navigationOptions:{tabBarIcon:function tabBarIcon(_ref){var tintColor=_ref.tintColor,focused=_ref.focused;return _react2.default.createElement(_reactNative.Image,{source:focused?require('./images/拾光蓝色.png'):require('./images/拾光-灰色.png'),__source:{fileName:_jsxFileName,lineNumber:37}});}}},assistant:{screen:_Assistant2.default,navigationOptions:{tabBarIcon:function tabBarIcon(_ref2){var tintColor=_ref2.tintColor,focused=_ref2.focused;return _react2.default.createElement(_reactNative.Image,{source:focused?require('./images/助理-蓝色.png'):require('./images/助理-灰色.png'),__source:{fileName:_jsxFileName,lineNumber:45}});}}},experience:{screen:_Experience2.default,navigationOptions:{tabBarIcon:function tabBarIcon(_ref3){var tintColor=_ref3.tintColor,focused=_ref3.focused;return _react2.default.createElement(_reactNative.Image,{source:focused?require('./images/体验-蓝色.png'):require('./images/体验-灰色.png'),__source:{fileName:_jsxFileName,lineNumber:53}});}}},wallet:{screen:_Wallet2.default,navigationOptions:{tabBarIcon:function tabBarIcon(_ref4){var tintColor=_ref4.tintColor,focused=_ref4.focused;return _react2.default.createElement(_reactNative.Image,{source:focused?require('./images/钱包-蓝色.png'):require('./images/钱包-灰色.png'),__source:{fileName:_jsxFileName,lineNumber:62}});}}},person:{screen:_Person2.default,navigationOptions:{tabBarIcon:function tabBarIcon(_ref5){var tintColor=_ref5.tintColor,focused=_ref5.focused;return _react2.default.createElement(_reactNative.Image,{source:focused?require('./images/我的-蓝色.png'):require('./images/我的-灰色.png'),__source:{fileName:_jsxFileName,lineNumber:71}});}}}},{tabBarOptions:{activeTintColor:'#3DCCCA',showIcon:'true'},tabBarPosition:'bottom'});var MyNavigatior=(0,_reactNavigation.StackNavigator)({Main:{screen:MainScreentNavigator},BrandDetail:{screen:_BrandClinicInfo2.default},diarylist:{screen:_DiaryList2.default},quickReserve:{screen:_QuickReserve2.default},reserveSelectClinic:{screen:_SelectClick2.default}},{initialRouteName:'Main',navigationOptions:{headerTintColor:'#333',headerTitleStyle:{fontWeight:'bold',fontSize:20},headerBackImage:require('./images/Back.png'),headerBackTitle:null}});var LoginModal=(0,_reactNavigation.StackNavigator)({Main:{screen:MyNavigatior},MyModal:{screen:_Login2.default}},{mode:'modal',headerMode:'none'});var styles=_reactNative.StyleSheet.create({container:{flex:1,backgroundColor:'#F5FCFF'},tabIcon:{width:24,height:24}});_reactNative.AppRegistry.registerComponent('esparclientRN',function(){return LoginModal;});

//# sourceMappingURL=index-compiled.js.map