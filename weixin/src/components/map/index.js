/*
 * @Description:
 * @Version: 1.0
 * @Author: sullay
 * @Date: 2020-05-21 15:54:27
 * @LastEditors: sullay
 * @LastEditTime: 2020-05-26 18:57:33
 */
import DataSet from '@antv/data-set'
import { Chart } from '@antv/g2'
import mapData from './china-provinces.geo.json'
export function draw () {
  const chart = new Chart({
    container: 'china-map',
    autoFit: true
  })
  // 同步度量
  chart.scale({
    longitude: {
      sync: true
    },
    latitude: {
      sync: true
    }
  })
  chart.axis(false)

  // 绘制世界地图背景
  const ds = new DataSet()
  const worldMap = ds.createView('back')
    .source(mapData, {
      type: 'GeoJSON'
    })
  const worldMapView = chart.createView()
  worldMapView.data(worldMap.rows)
  worldMapView.tooltip(false)
  worldMapView.polygon().position('longitude*latitude').style({
    // 地图样式
    fill: '#fff',
    stroke: '#D9F0FB',
    lineWidth: 1
  })

  // 可视化用户数据
  const userData = [{ name: '广东' }, { name: '北京' }, { name: '天津' }, { name: '河北' },
    { name: '河南' }, { name: '山东' }, { name: '山西' }, { name: '辽宁' }, { name: '吉林' },
    { name: '上海' }, { name: '安徽' }, { name: '重庆' }, { name: '浙江' }, { name: '江苏' },
    { name: '湖北' }, { name: '湖南' }, { name: '江西' }, { name: '广西' }, { name: '福建' },
    { name: '贵州' }, { name: '海南' }, { name: '云南' }, { name: '四川' }, { name: '陕西' },
    { name: '甘肃' }, { name: '内蒙古' }, { name: '新疆' }]
  const userDv = ds.createView()
    .source(userData)
    .transform({
      geoDataView: worldMap,
      field: 'name',
      type: 'geo.region',
      as: ['longitude', 'latitude']
    })
  const userView = chart.createView()
  userView.tooltip(false)
  userView.data(userDv.rows)
  userView.polygon()
    .position('longitude*latitude')
    .color('#01A0EB')
    .style({
      fillOpacity: 0.85
    }).state({
      active: {
        style: {
          stroke: '#01A0EB',
          lineWidth: 1
        }
      }
    })
    // 文字
    .label('name', (val) => {
      const res = {
        offsetX: 0,
        offsetY: 10,
        style: {
          fontSize: 9
        }
      }
      if (val === '内蒙古') {
        res.offsetY = 30
        res.offsetX = -20
      }
      if (val === '河北') {
        res.offsetY = 20
      }
      if (val === '甘肃') {
        res.offsetX = 10
      }
      return res
    })
    .animate({
      leave: {
        animation: 'fade-out'
      }
    })
  userView.interaction('element-active')

  chart.render()
}
