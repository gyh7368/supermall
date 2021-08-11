<template>
	<div class="wrapper" ref="aaaa">
		<div>
			<!-- 1.无论是否设置click:false,button都可以点击 -->
			<button type="button" @click="btnClick">按钮</button>
			
			<!-- 2.必须设置click:true,那么div才能监听点击 -->
			<div @click="divClick">红红火火恍恍惚惚</div>
			
			<ul class="content">
				<li>消息列表1</li>
				<li>消息列表2</li>
				<li>消息列表3</li>
				<li>消息列表4</li>
				<li>消息列表5</li>
				<li>消息列表6</li>
				<li>消息列表7</li>
				<li>消息列表8</li>
				<li>消息列表9</li>
				<li>消息列表10</li>
				<li>消息列表11</li>
				<li>消息列表12</li>
				<li>消息列表13</li>
				<li>消息列表14</li>
				<li>消息列表15</li>
				<li>消息列表16</li>
				<li>消息列表17</li>
				<li>消息列表18</li>
				<li>消息列表19</li>
				<li>消息列表20</li>
				<li>消息列表21</li>
				<li>消息列表22</li>
				<li>消息列表23</li>
				<li>消息列表24</li>
				<li>消息列表25</li>
				<li>消息列表26</li>
				<li>消息列表27</li>
				<li>消息列表28</li>
				<li>消息列表29</li>
				<li>消息列表30</li>
				<li>消息列表31</li>
				<li>消息列表32</li>
				<li>消息列表33</li>
				<li>消息列表34</li>
				<li>消息列表35</li>
				<li>消息列表36</li>
				<li>消息列表37</li>
				<li>消息列表38</li>
				<li>消息列表39</li>
				<li>消息列表40</li>
				<li>消息列表41</li>
				<li>消息列表42</li>
				<li>消息列表43</li>
				<li>消息列表44</li>
				<li>消息列表45</li>
				<li>消息列表46</li>
				<li>消息列表47</li>
				<li>消息列表48</li>
				<li>消息列表49</li>
				<li>消息列表50</li>
				<li>消息列表51</li>
				<li>消息列表52</li>
				<li>消息列表53</li>
				<li>消息列表54</li>
				<li>消息列表55</li>
				<li>消息列表56</li>
				<li>消息列表57</li>
				<li>消息列表58</li>
				<li>消息列表59</li>
				<li>消息列表60</li>
				<li>消息列表61</li>
				<li>消息列表62</li>
				<li>消息列表63</li>
				<li>消息列表64</li>
				<li>消息列表65</li>
				<li>消息列表66</li>
				<li>消息列表67</li>
				<li>消息列表68</li>
				<li>消息列表69</li>
				<li>消息列表70</li>
				<li>消息列表71</li>
				<li>消息列表72</li>
				<li>消息列表73</li>
				<li>消息列表74</li>
				<li>消息列表75</li>
				<li>消息列表76</li>
				<li>消息列表77</li>
				<li>消息列表78</li>
				<li>消息列表79</li>
				<li>消息列表80</li>
				<li>消息列表81</li>
				<li>消息列表82</li>
				<li>消息列表83</li>
				<li>消息列表84</li>
				<li>消息列表85</li>
				<li>消息列表86</li>
				<li>消息列表87</li>
				<li>消息列表88</li>
				<li>消息列表89</li>
				<li>消息列表90</li>
				<li>消息列表91</li>
				<li>消息列表92</li>
				<li>消息列表93</li>
				<li>消息列表94</li>
				<li>消息列表95</li>
				<li>消息列表96</li>
				<li>消息列表97</li>
				<li>消息列表98</li>
				<li>消息列表99</li>
				<li>消息列表100</li>
			</ul>
		</div>
	</div>
</template>

<script> 
import BScroll from 'better-scroll'

export default {
	data() {
		return {
			scroll: null
		}
	},
	//组件创建完之后调用
	mounted() {
		this.scroll = new BScroll(this.$refs.aaaa,{
			probeType: 3,
			pullUpLoad: true
			
		})
		// console.log(this.scroll)	
		
		this.scroll.on('scroll',(position) => {
			// console.log(position)
		
		})
		
		this.scroll.on('pullingUp',(position) => {
			
		})
		
	},
	methods:{
		divClick() {
			
		},
		btnClick() {
			
		}
	}
}
</script>

<style scoped="scoped">
	.wrapper{
		height: 150px;
		background-color: #25C6C6;
		
		overflow: hidden;
	}
</style>
