/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  View,
  WebView
} from "react-native";
// import WebView from "react-native-webview";

var HEADER = "#3b5998";
var BGWASH = "rgba(255,255,255,0.8)";
var DEFAULT_URL = "http://ganpatienterprises.co";

export default class WebViewExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: DEFAULT_URL,
      status: "No Page Loaded",
      loading: true,
      scalesPageToFit: true
    };
  }

  onNavigationStateChange = navState => {
    this.setState({
      backButtonEnabled: navState.canGoBack,
      forwardButtonEnabled: navState.canGoForward,
      url: navState.url,
      status: navState.title,
      loading: navState.loading,
      scalesPageToFit: true
    });
  };

  render() {
    return (
      <View style={[styles.container]}>        
        <View style={styles.statusBar}>
          <Text style={styles.statusBarText}>{this.state.status}</Text>
        </View>
        <WebView
          ref={e => (this.webView = e)}
          automaticallyAdjustContentInsets={false}
          style={styles.webView}
          source={{ uri: DEFAULT_URL}}
          javaScriptEnabledAndroid={true}
          onNavigationStateChange={this.onNavigationStateChange}
          onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
          startInLoadingState={true}
          scalesPageToFit={this.state.scalesPageToFit}
        />
      </View>
    );
  }
  
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: HEADER
  },
  webView: {
    backgroundColor: BGWASH,
    height: 350
  },  
  spinner: {
    width: 20,
    marginRight: 6
  }
});
