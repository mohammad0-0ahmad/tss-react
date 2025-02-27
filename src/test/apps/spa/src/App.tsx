
import { memo } from "react";
import { makeStyles, withStyles } from "makeStyles";
import { GlobalStyles } from "tss-react";
import { styled } from "@mui/material";
import Button from "@mui/material/Button"
import Breadcrumbs from "@mui/material/Breadcrumbs";

const H1 = styled('h1')({
	"color": "yellow"
});

export function App(props: { className?: string; }) {
	const { className } = props;
	const { classes, css, cx } = useStyles();

	return (
		<>
			<GlobalStyles
				styles={{
					"body": {
						"backgroundColor": "pink"
					},
					".foo": {
						"color": "cyan"
					}
				}}
			/>
			<div className={classes.root}>
				<h1>Black</h1>
				<h1>Should be lime green</h1>
				<h1
					className={cx(
						css({ "border": "1px solid black" }),
						className
					)}
				>
					Black, should have border and shadow
				</h1>
				<h1 className="foo">Should be cyan</h1>
				<H1>Should be yellow</H1>
				<H1 className={classes.ovStyled}>Should be dark red</H1>
				<Button variant="contained" color="primary"> Background should be lime green </Button>
				<Button
					variant="contained"
					color="primary"
					className={classes.ovInternal}
				>
					Background should be dark blue
				</Button>
				<div className={classes.parent}>
					<div className={classes.child}>
						Background should turn red when mouse is hover the parent.
					</div>
				</div>

				<Breadcrumbs
					className={classes.breadcrumbs_className}
					color="primary"
				>
					<span>background should be lightblue</span>
					<span>and the separator (/) should be red except when hover, then it is blue</span>
				</Breadcrumbs>
				<div style={{ "height": 10 }} />
				<Breadcrumbs
					classes={{
						"root": classes.breadcrumbs2_root,
						"separator": classes.breadcrumbs2_separator
					}}
					color="primary"
				>
					<span>background should be lightblue</span>
					<span>and the separator (/) should be red except when hover, then it is blue</span>
				</Breadcrumbs>

				<MyBreadcrumbs>
					<span>The separator</span>
					<span>should be lightgreen</span>
				</MyBreadcrumbs>

				<Button
					variant="contained"
					color="primary"
					className={classes.button2_className}
				>
					<span>The background should be red</span>
				</Button>

				<Button
					variant="contained"
					color="primary"
					classes={{ "root": classes.button2_root, }}
				>
					<span>The background should be red</span>
				</Button>
				<div className={cx(classes.testCx_bgYellow, classes.testCx_bgCyan)}>
					Background should be cyan
				</div>
				<div className={cx(classes.testCx_bgCyan, classes.testCx_bgYellow)}>
					Background should be yellow
				</div>



				<div className={classes.childRefTest_wrapper}>

					<div className={cx(
						classes.childRefTest_textColorPink,
						classes.childRefTest_wrapper1
					)}>
						Background should turn cyan when mouse hover the parent.
						Also the text should NOT be pink
					</div>
					<div className={cx(classes.childRefTest_wrapper2)}>
						Background should NOT turn cyan when mouse hover the parent.
					</div>

				</div>

				<div className={classes.mq}>
					The background color should turn from lightgreen to cyan when the window
					inner with goes is below 960px
				</div>

				<MyComponentStyled
					className={css({ "color": "red" })}
					colorSmall="cyan"
				/>
				<MyStyledButton>
					The text should turn from red to blue when the
					window inner width goes below 960px
					And I should have a class like tss-xxxxxx-MyStyledButton-text
				</MyStyledButton>
				<br />
				<MyAnchorStyled href="http://exampe.com">
					Background should be red
				</MyAnchorStyled>
				<MyAnchorStyled href="https://exampe.com">
					Background should be limegreen
				</MyAnchorStyled>
				<div className={cx(
					css({
						"@media screen and (min-width: 1px)": {
							"backgroundColor": "red"
						},
						"height": 50
					}),
					css({
						"backgroundColor": "lightgreen"
					})
				)}>
					background should be lightgreen
				</div>
				<SecondNestedSelectorExample />
			</div>
		</>
	);
}

const useStyles = makeStyles<void, "child" | "breadcrumbs2_separator" | "childRefTest_wrapper2" | "childRefTest_wrapper1">({
	"name": { App },
})((theme, _params, classes) => {

	const childRefTest_wrapper2 = {
		"border": "1px solid black",
		"margin": 30,
		"height": 100,
		"color": "black"
	};

	return {
		"root": {
			"& > h1:nth-child(2)": {
				"color": theme.palette.primary.main,
			}
		},
		"ovStyled": {
			"color": "darkred"
		},
		"ovInternal": {
			"backgroundColor": "darkblue"
		},
		"parent": {
			"border": "1px solid black",
			"padding": 30,
			[`&:hover .${classes.child}`]: {
				"background": "red",
			}
		},
		"child": {
			"background": "blue",
			"border": "1px solid black"
		},
		"breadcrumbs_className": {
			"backgroundColor": "lightblue",
			"& .MuiBreadcrumbs-separator": {
				"color": "red"
			},
			"&:hover .MuiBreadcrumbs-separator": {
				"color": "blue"
			}
		},

		"breadcrumbs2_root": {
			"backgroundColor": "lightblue",
			[`&:hover .${classes.breadcrumbs2_separator}`]: {
				"color": "blue"
			}
		},
		"breadcrumbs2_separator": {
			"color": "red"
		},

		"button2_className": {
			"backgroundColor": "red"
		},

		"button2_root": {
			"backgroundColor": "red"
		},

		"testCx_bgYellow": {
			"backgroundColor": "yellow"
		},
		"testCx_bgCyan": {
			"backgroundColor": "cyan"
		},

		"childRefTest_wrapper": {
			"border": "1px solid black",
			[`&:hover .${classes.childRefTest_wrapper1}`]: {
				"backgroundColor": "cyan"
			}
		},
		"childRefTest_wrapper1": {
			...childRefTest_wrapper2
		},
		childRefTest_wrapper2,
		"childRefTest_textColorPink": {
			"color": "pink"
		},
		"mq": {
			"height": 100,
			"backgroundColor": "lightgreen",
			"@media (max-width: 960px)": {
				"backgroundColor": "cyan"
			}
		}
	};
});

function MyComponent(props: { className?: string; colorSmall: string; }) {
	return (
		<div className={props.className}>
			The background color should turn from limegreen to cyan when the window
			inner with goes below 960px.
			Font should be red
		</div>
	);
}

const MyComponentStyled = withStyles(
	MyComponent,
	(theme, props) => ({
		"root": {
			"backgroundColor": theme.palette.primary.main,
			"height": 100,
			"marginTop": 20
		},
		"@media (max-width: 960px)": {
			"root": {
				"backgroundColor": props.colorSmall
			},
		}
	})
);

const MyStyledButton = withStyles(
	Button,
	{
		"text": {
			"color": "red",
            "textTransform": "unset"
		},
		"@media (max-width: 960px)": {
			"text": {
				"color": "blue"
			},
		}
	},
    { "name": "MyStyledButton" }
);

const MyAnchorStyled = withStyles(
	"a",
	(theme, { href }) => ({
		"root": {
			"border": "1px solid black",
			"backgroundColor":
				href?.startsWith("https") ?
					theme.palette.primary.main :
					"red"
		}
	})
);

const MyBreadcrumbs = withStyles(
	Breadcrumbs,
	(theme, _props, classes) => ({
		"ol": {
			[`& .${classes.separator}`]: {
				"color": theme.palette.primary.main
			}
		}
	})
);

const { SecondNestedSelectorExample } = (() => {

    const SecondNestedSelectorExample = memo(() => {

        const { classes, cx } = useStyles({ "color": "primary" });

        return (
            <div className={classes.root}>
                <div className={classes.child}>
                    The Background take the primary theme color when the mouse is hover the parent.
                </div>
                <div className={cx(classes.child, classes.small)}>
                    The Background take the primary theme color when the mouse is hover the parent.
                    I am smaller than the other child.
                </div>
            </div>
        );

    });

    const useStyles = makeStyles<{ color: "primary" | "secondary" }, "child" | "small">({
        "name": { SecondNestedSelectorExample }
    })(
        (theme, { color }, classes) => ({
            "root": {
                "padding": 30,
                [`&:hover .${classes.child}`]: {
                    "backgroundColor": theme.palette[color].main,
                },
            },
            "small": {},
            "child": {
                "border": "1px solid black",
                "height": 50,
                [`&.${classes.small}`]: {
                    "height": 30,
                }
            },
        })
    );

    return { SecondNestedSelectorExample };

})()