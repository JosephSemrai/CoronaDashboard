import React, { lazy, Suspense } from 'react';
import Page from 'src/components/Page';

const Content = lazy(() =>
  import('!babel-loader!mdx-loader!./Contributing.mdx')
);

function ContributingView() {
  return (
    <Page title="Welcome to the Documentation">
      <Suspense fallback={null}>
        <Content />
      </Suspense>
    </Page>
  );
}

export default ContributingView;
