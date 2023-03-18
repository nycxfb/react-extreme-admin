// interface StoreLocalType {
// 	address?: string; //地址
// 	scope?: number; //距离
// 	axios?: { latitude: string; longitude: string }; //坐标
// }
// interface MapViewerProps {
// 	storeRef: React.RefObject<StoreLocalType>;
// }
// const MapViewer: React.FC<MapViewerProps> = React.memo(({ storeRef }) => {
// 	const ref = useRef<HTMLDivElement>(null);
// 	const mapRef = useRef<any>(null);
// 	const AMapRef = useRef<any>(null);
// 	const GeocoderRef = useRef<any>(null);
// 	const circleRef = useRef<any>(null);
// 	const scopeRef = useRef<number>(storeRef.current?.scope || 100);
// 	const [value, setValue] = useState<string>();
// 	const [options, setOptions] = useState<{ label: string; value: string; record: any }[]>([]);
// 	const [scope, setScope] = useState<number>(scopeRef.current);
//
// 	const handleSearch = useMemoizedFn((keywords: string) => {
// 		if (keywords) {
// 			if (!AMapRef.current) return;
// 			let autoComplete = new AMapRef.current.Autocomplete({ city: "全国" }); //输入提示插件
// 			//搜索列表
// 			autoComplete.search(keywords, (status: any, result: any) => {
// 				const list = result?.tips?.filter((e: any) => e.location) || [];
//
// 				const data = list?.map((item: any) => ({
// 					label: item.name,
// 					value: `${item.name}_${item.district}_${item.address}`,
// 					title: `行政区:${item.district}\n地址:${item.address}`,
// 					record: {
// 						...item,
// 						location: {
// 							latitude: item.location.getLat(),
// 							longitude: item.location.getLng()
// 						}
// 					}
// 				}));
//
// 				setOptions(data);
// 			});
// 		} else {
// 			setOptions([]);
// 		}
// 	});
// 	//选中变化
// 	const handleChange = useMemoizedFn((newValue: string) => {
// 		setValue(newValue);
// 	});
// 	//被选中时调用
// 	const handleSelect = useMemoizedFn((_: any, option: any) => {
// 		let { record } = option;
// 		let axios = record.location;
//
// 		locationAxios(axios.longitude, axios.latitude);
// 	});
// 	const handleSelectScope = useMemoizedFn((_: any, option: any) => {
// 		setScope(option.value);
// 		scopeRef.current = option.value;
// 		if (storeRef.current) storeRef.current.scope = option.value;
//
// 		const circle = circleRef.current;
// 		const newRadius = option.value;
//
// 		if (circle) circle.setRadius(newRadius);
// 	});
// 	// 获取并展示当前城市信息
// 	const getGeolocation = useMemoizedFn((lnglat: [string, string]) => {
// 		if (!mapRef.current) return;
//
// 		// 地址精确到街道
// 		GeocoderRef.current.getAddress(lnglat, function (status: any, result: any) {
// 			if (status === "complete" && result.regeocode) {
// 				if (storeRef.current) storeRef.current.address = result.regeocode.formattedAddress;
// 			} else {
// 				console.warn("根据经纬度查询地址失败");
// 			}
// 		});
// 	});
// 	// 将地图定位到指定坐标
// 	const locationAxios = useMemoizedFn((lng: string, lat: string) => {
// 		let map = mapRef.current;
// 		let AMap = AMapRef.current;
// 		let circle = circleRef.current;
//
// 		if (storeRef.current)
// 			storeRef.current.axios = {
// 				longitude: lng,
// 				latitude: lat
// 			};
// 		if (map) {
// 			if (circle) mapRef.current.remove(circle);
// 			map.setCenter([lng, lat]);
// 			// 构造矢量圆形
// 			circleRef.current = new AMap.Circle({
// 				center: new AMap.LngLat(lng, lat), // 圆心位置
// 				radius: 100, //半径
// 				strokeColor: "#ffa39e", //线颜色
// 				strokeOpacity: 1, //线透明度
// 				strokeWeight: 3, //线粗细度
// 				fillColor: "#f5222d", //填充颜色
// 				fillOpacity: 0.2 //填充透明度
// 			});
// 			map.add(circleRef.current);
// 			map.setFitView();
// 		}
// 		getGeolocation([lng, lat]);
// 	});
// 	// 根据范围对指定坐标花圈
// 	const addCircle = useMemoizedFn((lnglat: [string, string]) => {
// 		const map = mapRef.current;
// 		const AMap = AMapRef.current;
// 		const circle = circleRef.current;
//
// 		if (!map) return;
//
// 		if (circle) {
// 			circle.setCenter(lnglat);
// 			return;
// 		}
// 		// 构造矢量圆形
// 		circleRef.current = new AMap.Circle({
// 			center: new AMap.LngLat(...lnglat), // 圆心位置
// 			radius: 100, //半径
// 			strokeColor: "#ffa39e", //线颜色
// 			strokeOpacity: 1, //线透明度
// 			strokeWeight: 3, //线粗细度
// 			fillColor: "#f5222d", //填充颜色
// 			fillOpacity: 0.2 //填充透明度
// 		});
// 		map.add(circleRef.current);
// 		map.setFitView();
// 	});
//
// 	useMount(() => {
// 		const { AMapLoader } = window as any;
//
// 		if (!AMapLoader) return;
//
// 		AMapLoader.load({
// 			key: deploy.AMAP_KEY || "d616ce0b678da92ca589abe53f14476d", // 申请好的Web端开发者Key，首次调用 load 时必填
// 			version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
// 			plugins: ["AMap.Circle", "AMap.AutoComplete", "AMap.Geolocation", "AMap.Geocoder"], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
// 			AMapUI: {
// 				// 是否加载 AMapUI，缺省不加载
// 				version: "1.1", // AMapUI 版本
// 				plugins: ["overlay/SimpleMarker"] // 需要加载的 AMapUI ui插件
// 			},
// 			Loca: {
// 				// 是否加载 Loca， 缺省不加载
// 				version: "2.0" // Loca 版本
// 			}
// 		})
// 			.then((AMap: any) => {
// 				AMapRef.current = AMap;
//
// 				// 地图实例化
// 				let map = new AMap.Map(ref.current, {
// 					resizeEnable: true, // 是否监控地图容器尺寸变化
// 					zoom: 16 // 初始地图级别
// 				});
//
// 				mapRef.current = map;
// 				// 精确定位器
// 				GeocoderRef.current = new AMap.Geocoder({});
//
// 				// 右下角定位到当前IP
// 				let geolocation = new AMap.Geolocation({
// 					enableHighAccuracy: true, //是否使用高精度定位，默认:true
// 					timeout: 10000, //超过10秒后停止定位，默认：5s
// 					position: "RB", //定位按钮的停靠位置
// 					offset: [10, 20], //定位按钮与设置的停靠位置的偏移量，默认：[10, 20]
// 					zoomToAccuracy: true, //定位成功后是否自动调整地图视野到定位点
// 					showCircle: false,
// 					showMarker: false
// 				});
//
// 				map.addControl(geolocation);
//
// 				//为地图注册click事件获取鼠标点击出的经纬度坐标
// 				map.on("click", function (e: any) {
// 					let axios = {
// 						latitude: e.lnglat.getLat(),
// 						longitude: e.lnglat.getLng()
// 					};
//
// 					if (storeRef.current) storeRef.current.axios = axios;
// 					getGeolocation([axios.longitude, axios.latitude]);
// 					addCircle([axios.longitude, axios.latitude]);
// 				});
// 				//
// 				map.on("complete", function (e: any) {
// 					const { axios } = storeRef.current || {};
//
// 					if (axios) {
// 						map.setCenter([axios.longitude, axios.latitude]);
// 						addCircle([axios.longitude, axios.latitude]);
// 					}
// 				});
// 			})
// 			.catch((e: any) => {
// 				console.error(e); //加载错误提示
// 			});
// 	});
//
// 	useUnmount(() => {
// 		if (mapRef.current) mapRef.current.destroy();
// 	});
//
// 	return (
// 		<div style={{ width: "calc(100% + 48px)", height: 448, margin: -24, position: "relative" }}>
// 			{renderForm()}
// 			<div ref={ref} style={{ width: "100%", height: "100%" }} />
// 		</div>
// 	);
//
// 	function renderForm() {
// 		return (
// 			<Form
// 				layout="inline"
// 				style={{
// 					position: "absolute",
// 					left: "50%",
// 					top: 10,
// 					transform: "translateX(-50%)",
// 					zIndex: 9999,
// 					width: 400
// 				}}
// 			>
// 				<Form.Item>
// 					<Select
// 						style={{ minWidth: 200 }}
// 						showSearch
// 						suffixIcon={<SearchOutlined />}
// 						value={value}
// 						options={options}
// 						defaultActiveFirstOption={false}
// 						onSearch={handleSearch}
// 						onChange={handleChange}
// 						onSelect={handleSelect}
// 						filterOption={false}
// 						notFoundContent={false}
// 						placeholder="点击搜索地名"
// 					/>
// 				</Form.Item>
// 				<Form.Item>
// 					<Select
// 						style={{ minWidth: 140 }}
// 						defaultValue={scope}
// 						options={[
// 							{ label: "300米", value: 300 },
// 							{ label: "200米", value: 200 },
// 							{ label: "100米", value: 100 },
// 							{ label: "50米", value: 50 },
// 							{ label: "30米", value: 30 },
// 							{ label: "10米", value: 10 }
// 						]}
// 						onSelect={handleSelectScope}
// 					/>
// 				</Form.Item>
// 			</Form>
// 		);
// 	}
// });
