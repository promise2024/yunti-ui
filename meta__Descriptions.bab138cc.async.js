(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[266],{34862:function(i,t,n){var s={"./ar.json":[18444,8444],"./be.json":[5401,5401],"./cs.json":[24815,4815],"./de.json":[11976,1976],"./en.json":[28443,8443],"./es.json":[74957,4957],"./fa.json":[45263,5263],"./fi.json":[94234,4234],"./fr.json":[96792,6792],"./hi.json":[80489,489],"./it.json":[59688,9688],"./ja.json":[98465,8465],"./ko.json":[7265,7265],"./nl.json":[67781,7781],"./pl.json":[29630,9630],"./pt.json":[15896,5896],"./ru.json":[59787,9787],"./sa.json":[84757,4757],"./tr.json":[22794,2794],"./uk.json":[54429,4429],"./vi.json":[97655,7655],"./zh.json":[50622,622]};function o(u){if(!n.o(s,u))return Promise.resolve().then(function(){var d=new Error("Cannot find module '"+u+"'");throw d.code="MODULE_NOT_FOUND",d});var l=s[u],r=l[0];return n.e(l[1]).then(function(){return n.t(r,19)})}o.keys=function(){return Object.keys(s)},o.id=34862,i.exports=o},7198:function(i,t,n){"use strict";n.r(t),n.d(t,{demos:function(){return d}});var s=n(90228),o=n.n(s),u=n(87999),l=n.n(u),r=n(75271),d={"descriptions-demo-demos":{component:r.memo(r.lazy(function(){return n.e(1117).then(n.bind(n,20674))})),asset:{type:"BLOCK",id:"descriptions-demo-demos",refAtomIds:["Descriptions"],dependencies:{"index.tsx":{type:"FILE",value:n(47716).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.19"}},entry:"index.tsx"},context:{"@yuntijs/ui":n(75843)},renderOpts:{compile:function(){var m=l()(o()().mark(function p(){var a,y=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(8648).then(n.bind(n,78648));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,y));case 3:case"end":return e.stop()}},p)}));function c(){return m.apply(this,arguments)}return c}()}},"descriptions-demo-playground":{component:r.memo(r.lazy(function(){return n.e(1117).then(n.bind(n,2781))})),asset:{type:"BLOCK",id:"descriptions-demo-playground",refAtomIds:["Descriptions"],dependencies:{"index.tsx":{type:"FILE",value:n(94598).Z},"@lobehub/ui":{type:"NPM",value:"1.138.25"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.19"}},entry:"index.tsx"},context:{"@lobehub/ui":n(60174),"@yuntijs/ui":n(75843)},renderOpts:{compile:function(){var m=l()(o()().mark(function p(){var a,y=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(8648).then(n.bind(n,78648));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,y));case 3:case"end":return e.stop()}},p)}));function c(){return m.apply(this,arguments)}return c}()}}}},63552:function(i,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return s}});const s=[{value:"based on antd ",paraId:0,tocIndex:0},{value:"Descriptions",paraId:0,tocIndex:0},{value:" component.",paraId:0,tocIndex:0},{value:`import { Descriptions } from '@yuntijs/ui';

export default () => {
  return (
    <Descriptions
      title="YuntiUI"
      column={2}
      colon={false}
      labelStyle={{ width: 120 }}
      items={[
        {
          key: 'Themeable',
          label: 'Themeable',
          children: 'Customize default themes',
        },
        {
          key: 'Fast',
          label: 'Fast',
          children: 'voids unnecessary styles props',
        },
        {
          key: 'Light & Dark UI',
          label: 'Light & Dark UI',
          children: 'Automatic dark mode recognition',
        },
      ]}
    />
  );
};
`,paraId:1,tocIndex:1}]},94598:function(i,t){"use strict";t.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import type { DescriptionsProps } from '@yuntijs/ui';
import { Descriptions } from '@yuntijs/ui';

export default () => {
  const store = useCreateStore();
  const control: DescriptionsProps | any = useControls(
    {
      title: 'YuntiUI',
      bordered: false,
      colon: false,
      column: 1,
      extra: 'extra',
      layout: {
        options: ['horizontal', 'vertical'],
        value: 'horizontal',
      },
      size: {
        options: ['default', 'middle', 'small'],
        value: 'default',
      },
    },
    { store }
  );
  return (
    <StoryBook levaStore={store}>
      <Descriptions
        {...control}
        items={[
          {
            key: 'Themeable',
            label: 'Themeable',
            children: 'Customize default themes',
          },
          {
            key: 'Fast',
            label: 'Fast',
            children: 'voids unnecessary styles props',
          },
          {
            key: 'Light & Dark UI',
            label: 'Light & Dark UI',
            children: 'Automatic dark mode recognition',
          },
        ]}
      />
    </StoryBook>
  );
};
`},47716:function(i,t){"use strict";t.Z=`import { Descriptions } from '@yuntijs/ui';

export default () => {
  return (
    <Descriptions
      colon={false}
      column={2}
      items={[
        {
          key: 'Themeable',
          label: 'Themeable',
          children: 'Customize default themes',
        },
        {
          key: 'Fast',
          label: 'Fast',
          children: 'voids unnecessary styles props',
        },
        {
          key: 'Light & Dark UI',
          label: 'Light & Dark UI',
          children: 'Automatic dark mode recognition',
        },
      ]}
      labelStyle={{ width: 120 }}
      title="YuntiUI"
    />
  );
};
`}}]);
