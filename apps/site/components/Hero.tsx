import { ThemeTintAlt, useTint } from '@tamagui/logo'
import { NextLink } from 'components/NextLink'
import Link from 'next/link'
import { memo } from 'react'
import {
  Button,
  H1,
  Paragraph,
  Spacer,
  Text,
  Theme,
  TooltipSimple,
  VisuallyHidden,
  XStack,
  YStack,
  styled,
} from 'tamagui'

import { ContainerLarge } from './Container'
import { DiscordIcon } from './DiscordIcon'
import { useHeroHovered } from './heroState'
import { InstallInput } from './InstallInput'
import { TwitterIcon } from './TwitterIcon'

// function useAlwaysConcurrent() {
//   const inputRef = useRef<HTMLInputElement>(null)

//   useEffect(() => {
//     const input = inputRef.current
//     if (!input) return
//     setInterval(() => {
//       console.log('writing in the input')
//       input.value = `${Math.random()}`
//     }, 16)
//   }, [inputRef])

//   return <input ref={inputRef} />
// }

export function Hero() {
  const { tint, name } = useTint()

  // const element = useAlwaysConcurrent()

  return (
    <Theme name={tint as any}>
      <div className={`${name}-season _dsp-contents`}>
        {/* {element} */}
        <YStack
          o={0.75}
          zi={-1}
          pos="absolute"
          t={0}
          l={0}
          r={0}
          h={2000}
          className="hero-blur"
        />
        <HeroContents />
      </div>
    </Theme>
  )
}

const HeroSubTitle = memo(() => {
  const [hovered, setHovered] = useHeroHovered()
  return (
    <Subtitle>
      <NextLink prefetch={false} href="/docs/core/configuration">
        <Tag theme="green_alt2" onHoverIn={() => setHovered(0)} active={hovered === 0}>
          styles
        </Tag>
      </NextLink>
      ,{' '}
      <NextLink prefetch={false} href="/docs/intro/why-a-compiler">
        <Tag theme="blue_alt2" onHoverIn={() => setHovered(1)} active={hovered === 1}>
          optimizing compiler
        </Tag>
      </NextLink>{' '}
      &{' '}
      <NextLink prefetch={false} href="/docs/components/stacks">
        <Tag theme="purple_alt2" onHoverIn={() => setHovered(2)} active={hovered === 2}>
          UI&nbsp;kit
        </Tag>
      </NextLink>{' '}
      that&nbsp;unify&nbsp;React Native + Web
    </Subtitle>
  )
})

const HeroContents = memo(function HeroContents() {
  return (
    <ContainerLarge contain="layout" pos="relative">
      <YStack
        className="bg-grid mask-gradient-up"
        fullscreen
        // @ts-ignore
        top="auto"
        height={521}
        left={-1000}
        right={-1000}
        pe="none"
        o={0.08}
      />
      <YStack
        f={1}
        ov="hidden"
        gap="$3"
        position="relative"
        pt="$15"
        mb="$4"
        $sm={{
          maxWidth: '100%',
          mx: 'auto',
          pb: '$4',
        }}
      >
        <XStack pos="absolute" als="center" y={-80}>
          <Link prefetch={false} href="/takeout">
            <ThemeTintAlt>
              <Button
                bw={2}
                boc="$color5"
                size="$3"
                br="$10"
                elevation="$1"
                fontFamily="$silkscreen"
              >
                Introducing Takeout 🥡
                <Text ff="$body" fontSize="$3" color="$color10" $sm={{ dsp: 'none' }}>
                  our new pro starter kit
                </Text>
              </Button>
            </ThemeTintAlt>
          </Link>
        </XStack>

        <YStack ai="flex-start" $gtSm={{ ai: 'center' }} gap="$4">
          <H1
            ta="left"
            size="$10"
            maw={500}
            h={130}
            // FOR CLS IMPORTANT TO SET EXACT HEIGHT IDK WHY LINE HEIGHT SHOULD BE STABLE
            $gtSm={{
              mx: 0,
              maxWidth: 800,
              size: '$13',
              h: 190,
              ta: 'center',
              als: 'center',
            }}
            $gtMd={{
              maxWidth: 900,
              size: '$14',
              h: 240,
            }}
            $gtLg={{
              size: '$16',
              lh: '$15',
              maxWidth: 1200,
              h: 290,
            }}
          >
            <span className="all ease-in ms250 rainbow clip-text">Write less,</span>
            <br />
            runs&nbsp;faster
          </H1>

          <YStack
            px={0}
            maw={420}
            // prevent layout shift
            h={70}
            $gtSm={{
              maw: 500,
            }}
            $gtMd={{
              h: 90,
              px: 90,
              maw: 700,
            }}
            $gtLg={{
              maw: 900,
            }}
          >
            <HeroSubTitle />
          </YStack>
        </YStack>

        <Spacer size="$4" />
        <InstallInput />
        <Spacer size="$1" />

        <XStack
          ai="center"
          jc="center"
          gap="$2"
          $xxs={{ ai: 'center', fw: 'wrap', gap: 0 }}
        >
          <NextLink
            target="_blank"
            legacyBehavior={false}
            href="https://twitter.com/tamagui_js"
          >
            <TooltipSimple placement="top" delay={0} restMs={25} label="Twitter">
              <YStack p="$5" $sm={{ p: '$3' }} opacity={0.65} hoverStyle={{ opacity: 1 }}>
                <VisuallyHidden>
                  <Text>Twitter</Text>
                </VisuallyHidden>
                <TwitterIcon width={24} />
              </YStack>
            </TooltipSimple>
          </NextLink>

          <NextLink prefetch={false} href="/docs/intro/introduction">
            <Button
              h={52}
              accessibilityLabel="Get started (docs)"
              fontFamily="$silkscreen"
              size="$5"
              fontSize="$6"
              borderRadius={1000}
              bordered
              bw={2}
              mx="$2"
              tabIndex="0"
              elevation="$1"
              letterSpacing={-2}
              pressStyle={{
                elevation: '$0',
              }}
            >
              Get started
            </Button>
          </NextLink>

          <NextLink
            target="_blank"
            legacyBehavior={false}
            href="https://discord.gg/4qh6tdcVDa"
          >
            <TooltipSimple placement="top" delay={0} restMs={25} label="Discord">
              <YStack p="$5" $sm={{ p: '$3' }} opacity={0.65} hoverStyle={{ opacity: 1 }}>
                <VisuallyHidden>
                  <Text>Discord</Text>
                </VisuallyHidden>
                <DiscordIcon plain width={24} />
              </YStack>
            </TooltipSimple>
          </NextLink>
        </XStack>
      </YStack>

      <Spacer size="$7" />
    </ContainerLarge>
  )
})

const Subtitle = styled(Paragraph, {
  color: '$color8',
  size: '$6',
  fontFamily: '$silkscreen',
  ta: 'left',
  ls: -1,

  $gtSm: {
    ta: 'center',
    size: '$7',
    ls: -1,
  },

  $gtMd: {
    size: '$8',
    ls: -1,
  },

  $gtLg: {
    size: '$9',
    lh: 50,
    ls: -1,
  },
})

const Tag = styled(Text, {
  className: 'hero-tag text-decoration-none',
  fontFamily: 'inherit' as any,
  fontSize: 'inherit' as any,
  borderRadius: '$2',
  px: '$1',
  mx: '$-1',
  cursor: 'pointer',
  color: '$color',
  bc: '$color2',

  hoverStyle: {
    color: '$color',
    bc: '$color3',
  },

  variants: {
    active: {
      true: {
        color: '$color10',
        bc: '$color5',

        hoverStyle: {
          color: '$color12',
          bc: '$color5',
        },
      },
    },
  } as const,
})
