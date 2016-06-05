/**
 * Created by unrealyan on 16/6/5.
 */
import React from 'react';
const NewLoans =React.createClass({
    render:function () {
        return(
            <div>
                <table className="table table-striped table-hover">
                    <thead>
                         <tr><th>ID</th><th>姓名</th><th>身份证号码</th><th>联系电话</th><th>贷款金额</th><th>备注</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>002</td>
                            <td>王五</td>
                            <td>220122928373</td>
                            <td>13133638494</td>
                            <td>400,000</td>
                            <td><a href="#">点击详情</a></td>
                        </tr>
                        <tr>
                            <td>002</td>
                            <td>王五</td>
                            <td>220122928373</td>
                            <td>13133638494</td>
                            <td>400,000</td>
                            <td><a href="#">点击详情</a></td>
                        </tr>
                        <tr>
                            <td>002</td>
                            <td>王五</td>
                            <td>220122928373</td>
                            <td>13133638494</td>
                            <td>700,000</td>
                            <td><a href="#">点击详情</a></td>
                        </tr>
                        <tr>
                            <td>005</td>
                            <td>王五</td>
                            <td>220122928373</td>
                            <td>13133638494</td>
                            <td>400,900</td>
                            <td><a href="#">点击详情</a></td>
                        </tr>
                        <tr>
                            <td>044</td>
                            <td>王五</td>
                            <td>220122928373</td>
                            <td>13133638494</td>
                            <td>460,000</td>
                            <td><a href="#">点击详情</a></td>
                        </tr> <tr>
                            <td>002</td>
                            <td>王五</td>
                            <td>220122928373</td>
                            <td>13133638494</td>
                            <td>900,000</td>
                            <td><a href="#">点击详情</a></td>
                        </tr> <tr>
                            <td>045</td>
                            <td>王五</td>
                            <td>220122928373</td>
                            <td>13133638494</td>
                            <td>800,000</td>
                            <td><a href="#">点击详情</a></td>
                        </tr>



                    </tbody>
                </table>
                <hr/>
            </div>
        )
    }
});
export default NewLoans;