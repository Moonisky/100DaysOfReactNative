//
//  AppDelegate.swift
//  _100DaysOfReactNative
//
//  Created by Semper_Idem on 16/3/11.
//  Copyright © 2016年 星夜暮晨. All rights reserved.
//

import UIKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?


    func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {
        
        let jsCodeLocation: NSURL?
        
        /**
        * Loading JavaScript code - uncomment the one you want.
        *
        * OPTION 1
        * Load from development server. Start the server from the repository root:
        *
        * $ npm start
        *
        * To run on device, change `localhost` to the IP address of your computer
        * (you can get this by typing `ifconfig` into the terminal and selecting the
        * `inet` value under `en0:`) and make sure your computer and iOS device are
        * on the same Wi-Fi network.
        */
        
        jsCodeLocation = NSURL(string: "http://localhost:8081/index.ios.bundle?platform=ios&dev=true")
        
        /**
        * OPTION 2
        * Load from pre-bundled file on disk. The static bundle is automatically
        * generated by "Bundle React Native code and images" build step.
        */
        
//        jsCodeLocation = NSBundle.mainBundle().URLForResource("main", withExtension: "jsbundle")
        
        let rootView = RCTRootView(bundleURL: jsCodeLocation, moduleName: "_100DaysOfReactNative", initialProperties: nil, launchOptions: launchOptions)
        self.window = UIWindow(frame: UIScreen.mainScreen().bounds)
        
        let rootViewController = UIViewController()
        rootViewController.view = rootView
        
        self.window?.rootViewController = rootViewController
        self.window?.makeKeyAndVisible()
        
        return true
    }

    func applicationWillResignActive(application: UIApplication) {
        // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
        // Use this method to pause ongoing tasks, disable timers, and throttle down OpenGL ES frame rates. Games should use this method to pause the game.
    }

    func applicationDidEnterBackground(application: UIApplication) {
        // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
        // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
    }

    func applicationWillEnterForeground(application: UIApplication) {
        // Called as part of the transition from the background to the inactive state; here you can undo many of the changes made on entering the background.
    }

    func applicationDidBecomeActive(application: UIApplication) {
        // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
    }

    func applicationWillTerminate(application: UIApplication) {
        // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
    }


}
