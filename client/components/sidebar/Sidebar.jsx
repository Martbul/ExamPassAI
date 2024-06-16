import { Animated, Dimensions, Text, TouchableOpacity } from "react-native";
import styles from "../../assets/css/knowledgebase/knowledgebase";
import { useState } from "react";
export const Sidebar = ({toggleSidebar,sidebarWidth,sidebarAnim}) => {
   
  return (
    <>
      <TouchableOpacity style={styles.overlay} onPress={toggleSidebar}>
        <Animated.View
          style={[
            styles.sidebar,
            { transform: [{ translateX: sidebarAnim }], width: sidebarWidth },
          ]}
        >
          <Text style={styles.sidebarTitle}>EasyPassAI</Text>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Teach AI</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Clear Old Chat</Text>
          </TouchableOpacity>
         
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Help</Text>
          </TouchableOpacity>
        </Animated.View>
      </TouchableOpacity>
    </>
  );
};
