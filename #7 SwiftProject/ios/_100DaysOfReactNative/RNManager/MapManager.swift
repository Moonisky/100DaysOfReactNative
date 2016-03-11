//
//  MapManager.swift
//  _100DaysOfReactNative
//
//  Created by Semper_Idem on 16/3/11.
//  Copyright © 2016年 星夜暮晨. All rights reserved.
//

import UIKit
import MapKit

@objc(MapManager)
class MapManager: RCTViewManager {
    
    override func view() -> UIView! {
        return MKMapView()
    }
}