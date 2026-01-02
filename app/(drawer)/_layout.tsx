import React from 'react'
import { Drawer } from 'expo-router/drawer';
import { MaterialIcons } from '@expo/vector-icons';

export default function DrawerLayout() {
    return (
        <Drawer screenOptions={{ headerTitle: 'Menu', drawerStyle: { maxWidth: 280, borderTopRightRadius: 0, borderBottomEndRadius: 0 }, drawerItemStyle: { borderRadius: 0 } }} >
            <Drawer.Screen name="DrawerScreen1" options={{
                drawerLabel: 'Home', title: 'Home',
                drawerIcon: ({ color, size }) => (<MaterialIcons name="home" size={20} color={color} />)
            }} />
            <Drawer.Screen name="DrawerScreen2" options={{
                drawerLabel: 'About', title: 'About',
                drawerIcon: ({ color, size }) => (<MaterialIcons name="info" size={20} color={color} />)
            }} />
            <Drawer.Screen name="DrawerScreen3" options={{
                drawerLabel: 'Service', title: 'Service',
                drawerIcon: ({ color, size }) => (<MaterialIcons name="build-circle" size={20} color={color} />)
            }} />
            <Drawer.Screen name="DrawerScreen4" options={{
                drawerLabel: 'Product', title: 'Product',
                drawerIcon: ({ color, size }) => (<MaterialIcons name="shopping-cart" size={20} color={color} />)
            }} />
            <Drawer.Screen name="DrawerScreen5" options={{
                drawerLabel: 'Contact', title: 'Contact',
                drawerIcon: ({ color, size }) => (<MaterialIcons name="contact-page" size={20} color={color} />)
            }} />
        </Drawer>
    )
}
