import { test, Page, Frame, FrameLocator, Locator } from '@playwright/test';

test('frames',async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames');

    const all_frames=await page.frames()
    console.log(all_frames.length)//

    //using frame name or link -handling frames using frame objects - Approach 1
    const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})

    if (!frame1) {
        throw new Error('Outer frame not found');
      }

    frame1.fill('[name="mytext1"]','HI')
    

     //using frame locator -Approach 2
     await page.frameLocator('frame[src="frame_1.html"]').locator('[name="mytext1"]').fill('HI')
})


//Approach 1

test.only('nested frames', async ({ page }) => {
  // Navigate to the page with nested frames
  await page.goto('https://ui.vision/demo/webtest/frames');

  // Get the outer frame by its URL
  const outerFrame:Frame |null = await page.frame({
    url: 'https://ui.vision/demo/webtest/frames/frame_3.html',
  });

  if (!outerFrame) {
    throw new Error('Outer frame not found');
  }
  // Get child frames inside the outer frame
  const innerFrames: Frame[] = outerFrame.childFrames();//
  console.log(`Number of inner frames: ${innerFrames.length}`);

    // Interact with the first inner frame - 0 indexing
    const innerFrame = innerFrames[0];
    const checkbox = innerFrame.locator('div[aria-label="Web Testing"]');

    await checkbox.check();

});

 
//Approach 2

test('nested frames 2', async ({ page }: { page: Page }) => {
  // Navigate to the page with frames
  await page.goto('https://ui.vision/demo/webtest/frames');

  // Get the outer frame by its URL
  const outerFrame: Frame | null = await page.frame({
    url: 'https://ui.vision/demo/webtest/frames/frame_3.html',
  });

  if (!outerFrame) {
    throw new Error('Outer frame not found');
  }

  // Fill a text field inside the outer frame
  await outerFrame.fill('[name="mytext3"]', 'HI');

  // Locate the inner frame using frameLocator
  const inner: FrameLocator = outerFrame.frameLocator('//iframe');
  // Locate and click the element inside the inner frame
  const innerElement: Locator = inner.locator('div[aria-label="Web Testing"]')
  await innerElement.click();

});







