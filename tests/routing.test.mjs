import {test} from 'node:test'
import assert from 'node:assert/strict'
import {alternateLocalePath} from '../src/features/site-templates/catalog/designfast/routing.ts'
test('独立站首页双语往返',()=>{assert.equal(alternateLocalePath('','zh','/'),'/en');assert.equal(alternateLocalePath('/en','en','/en'),'/')})
test('宿主子路径中保留详情页面、查询参数和锚点',()=>{assert.equal(alternateLocalePath('/templates/designfast/site','zh','/templates/designfast/site/services/web-design','?source=market','#contact'),'/templates/designfast/site/en/services/web-design?source=market#contact');assert.equal(alternateLocalePath('/templates/designfast/site/en','en','/templates/designfast/site/en/services/web-design','?source=market','#contact'),'/templates/designfast/site/services/web-design?source=market#contact')})
test('非模板路径必须明确拒绝',()=>{assert.throws(()=>alternateLocalePath('/templates/designfast/site','zh','/other'),/基础路径/);assert.throws(()=>alternateLocalePath('/en','en','/enterprise'),/基础路径/)})
