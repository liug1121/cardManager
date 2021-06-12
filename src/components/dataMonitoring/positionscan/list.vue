<template >
    <div class="cardinfos-page">
        <table>
            <tr>
                <td><span class="title">号码</span></td>
                <td><span class="title">状态</span></td>
            </tr>
            <tr>
                <td>18876766567</td>
                <td>正常</td>
            </tr>
            <tr>
                <td>18876766567</td>
                <td><span class="stop">已停用</span></td>
            </tr>
        </table>
        <div class="table-page">
            <div class="footer">10/20</div>
            <div class="footer">下一页</div>
        </div>
    </div>

</template>
<script>
export default {
        props: {
            message: {
                type: String,
                default: '默认显示的信息'
                // require: true // 必填
            }
        }
    }
</script>
<style scoped>
.cardinfos-page{
    background:lightblue;
    height: 100%;
}
table {
    width: 100%;
    border-spacing: 0;
}
td {
    border-bottom: 1px solid #999;
    border-right: 1px solid #999;
}
.title{
    font-size: 16px;
    font-weight:bold;
}
.stop{
    color: red;
}
.table-page{
    text-align: right;
}
.footer{
    margin-right: 5px;
    display: inline-block;
    border: 1px solid #999;
}
</style>

